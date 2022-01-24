import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { NeutralButton, PageHeader, DataTable } from 'components'
import makeData from '../../makeData'
import Swal from 'sweetalert2'
import { selectAllMembers } from 'store/selectors/members'
import { currentUserSelector } from 'store/selectors/session'
import {
  getMembers as getMembersAction,
  updateMember as updateMemberAction,
  createMember as createMemberAction,
  deleteMember as deleteMemberAction,
  addCredits as addCreditsAction,
  deductCredits as deductCreditsAction,
  impersonateMember as impersonateMemberAction,
  leaveImpersonate as leaveImpersonateAction
} from 'store/action-creators/members'
import { Link, Redirect } from 'react-router-dom'

export const useForm = ({ initialValues, onSubmit, validate }) => {
    const [values, setValues] = React.useState(initialValues || {})
    const [touchedValues, setTouchedValues] = React.useState({})
    const [errors, setErrors] = React.useState({})

    const handleChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name
      setValues({
        ...values,
        [name]: value
      })
    }
  
    const handleBlur = event => {
      const target = event.target
      const name = target.name
      setTouchedValues({
        ...touchedValues,
        [name]: true
      })
      const e = validate(values)
      setErrors({
        ...errors,
        ...e
      })
    }
  
    const handleSubmit = event => {

      const e = validate(values)
      setErrors({
        ...errors,
        ...e
      })
  
      onSubmit({ ...values, e })
    }
  
    return {
      values,
      touchedValues,
      errors,
      handleChange,
      handleSubmit,
      handleBlur
    }
  }

export const CreditModalComponent = ({ onSubmit, initialValues }) => {
  console.log(initialValues)
  const { values, touchedValues, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValues,
    onSubmit,
    validate(values) {
      const errors = {}

      if (values.amount === "") {
        errors.amount = "Please select a customer"
      }

      return errors
    }
  })

  return (
      <form onSubmit={handleSubmit}>
        <div className="flex-grow">
          <div className="pt-5 pb-5 border-b">
            <div className="px-10 text-base text-gray-700">{values.header}</div>
          </div>
          <div className="p-10 pt-5 flex pb-0" >
            <div className="flex-1 pr-5">
              <div className="text-sm text-blue-700 py-2">Total Credits</div>
              <div className="border p-2 text-blue-700">{values.credit}</div>
            </div>
            <div className="flex-1">
              <div className='block w-full py-2'>
                <label htmlFor="amount">
                  <span className="inline-block mb-2">Amount</span>
                  <input type="text" name="amount" className="w-full p-2 border" placeholder="Please specify an amount" onChange={handleChange} value={values.amount}/>
                </label>
              </div>
              <input type="hidden" name="slug" onChange={handleChange} value={values.slug}/>
            </div>
          </div>
          <div className="flex p-10 pt-0 w-full pb-5">
            <div className='block w-full py-2'>
              <label htmlFor="amount">
                <span className="inline-block mb-2">Amount</span>
                <input type="text" name="message" className="w-full p-2 border" placeholder="Please specify a message" onChange={handleChange} value={values.message}/>
              </label>
            </div>
          
          </div>
          <div className="float-right px-10 pb-5">
            <button className="text-white p-3 rounded bg-blue-500 hover:bg-blue-700" type="submit">{values.add}{values.deduct} Credits</button>
          </div>
        </div>
      </form>
  )
}

const AddCreditModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(addCreditsAction(values))
        dispatch(getMembersAction())
        hideModal()
        Alert('success', 'Credit successfully updated!')
      }
    })
  ),
  reduxForm({
    form: 'add-credit'
  })
)(CreditModalComponent)

const DeductCreditModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(deductCreditsAction(values))
        dispatch(getMembersAction())
        hideModal()
        Alert('success', 'Credit successfully updated!')
      }
    })
  ),
  reduxForm({
    form: 'deduct-credit'
  })
)(CreditModalComponent)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
})



function UsersComponent({ getMembers, deleteMember, impersonateMember, members, user }) {
  const { user_type } = user

  if (user_type != 'admin') {
    return <Redirect from='/account' to="/account/overview" />
  }
  const { showModal } = useModal()
  const populateMembers = async () => {
    await getMembers()
  }

  useEffect(() => {
    populateMembers()
  }, [])

  console.log(members)

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
        className: 'md:hidden xl:table-cell'
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
        className: 'md:hidden xl:table-cell'
      },
      {
        Header: 'Type',
        accessor: 'user_type'
      },
      {
        Header: 'Credits',
        accessor: 'wallet.balance',
        className: 'md:hidden xl:table-cell'
      },
      {
        Header: 'Date Joined',
        accessor: 'created_at',
        className: 'md:hidden xl:table-cell'
      },
      {
        id: "action",
        accessor: 'slug',
        Cell: row => {
          const slug = row.row.original.slug
          const impersonator = row.row.original.impersonator
          const credit = row.row.original.wallet.balance
          const header = 'Adjust User Credits'
          const add = "Add"
          const deduct = "Deduct"
          const amount = ''
          const message = ''
          const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3"
          console.log(row)
          return (
            <div className="float-left">
              <Link className="md:block lg:inline bg-gray-200 hover:bg-gray-400 text-gray-700 text-xs font-bold py-1 px-4 rounded" onClick={() => impersonateMember(slug, impersonator)} to="#">
                <i className="material-icons inline lg:hidden">how_to_reg</i> <span className="hidden lg:inline">Impersonate</span>
              </Link>{' '} 
              <Link className="md:block lg:inline bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" 
                onClick={() =>
                  showModal(AddCreditModal, { slug, credit, header, add, amount, message, className })
                } to="#">
                  <i className="material-icons inline lg:hidden">how_to_reg</i> <span className="hidden lg:inline">Add Credits</span>
                </Link>{' '}
              <Link className="md:block lg:inline bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-1 px-4 rounded" 
                onClick={() =>
                  showModal(DeductCreditModal, { slug, credit, header, deduct, amount, message, className })
                } to="#">
                  <i className="material-icons inline lg:hidden">how_to_reg</i> <span className="hidden lg:inline">Deduct Credits</span>
                </Link>{' '}
              <Link className="md:block lg:inline bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded" onClick={() => deleteMember(slug)} to="#">
                <i className="material-icons inline lg:hidden">how_to_reg</i> <span className="hidden lg:inline">Delete</span>
              </Link>
            </div>
          )
        },
        Header: 'Action',
        sortable: false,
        width: 45
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), [])
  const [filteredData, setFilteredData] = useState(members)
  const handleSetData = members => {
    setFilteredData(members)
  }
  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
      <PageHeader title="User" subTitle="Accounts" >
        <Link to="/account/users/export" className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <i className="material-icons">view_module</i>
          <span>Export</span>
        </Link>
      </PageHeader>

        <DataTable columns={columns} data={members} />
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
    members: selectAllMembers(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getMembers: () => dispatch(getMembersAction()),
    deleteMember: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteMemberAction(id))
          Alert('success', 'User successfully deleted!')
        }
      })
    },

    impersonateMember: (id, impersonator) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, impersonate user!'
      }).then((result) => {
        if (result.value) {
          dispatch(impersonateMemberAction(id, impersonator))
          Alert('success', 'Successfully impersonate user!')
          window.location.reload();
        }
      })
    }
  })
)(UsersComponent)