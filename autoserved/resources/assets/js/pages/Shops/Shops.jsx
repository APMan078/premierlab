import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { NeutralButton, PageHeader, DataTable } from 'components'
import makeData from '../../makeData'
import Swal from 'sweetalert2'
import { selectAllShops } from 'store/selectors/shops'
import { currentUserSelector } from 'store/selectors/session'
import {
  getShops as getShopsAction,
  updateShop as updateShopAction,
  createShop as createShopAction,
  deleteShop as deleteShopAction,
} from 'store/action-creators/shops'
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

export const ShopModalComponent = ({ onSubmit, initialValues }) => {
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
          <div className="p-10 pt-5 flex pb-0" style={{ width: '480px'}}>
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
            <button className="text-white p-3 bg-blue-500 hover:bg-blue-700" type="submit">{values.add}{values.deduct} Credits</button>
          </div>
        </div>
      </form>
  )
}

const NewShopModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(createShopAction(values))
        dispatch(getShopsAction())
        hideModal()
        Alert('success', 'Shop successfully created!')
      }
    })
  ),
  reduxForm({
    form: 'new-shop'
  })
)(ShopModalComponent)

const EditShopModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(updateShopAction(values))
        dispatch(getShopsAction())
        hideModal()
        Alert('success', 'Shop successfully updated!')
      }
    })
  ),
  reduxForm({
    form: 'edit-shop'
  })
)(ShopModalComponent)

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



function ShopsComponent({ getShops, deleteShop, shops, user }) {
  const { user_type } = user


  const { showModal } = useModal()
  const populateShops = async () => {
    await getShops()
  }

  useEffect(() => {
    populateShops()
  }, [])

  console.log(shops)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Shop Name',
        accessor: 'name',
      },
      {
        id: 'type',
        Header: 'Type',
        accessor: 'type',
        Cell: row => {
          console.log(row)
          const types = row.row.original.type || {}
          console.log(types)
          return(
            <>
            { types.map((type, idx) => (
              <span className="rounded bg-blue-800 text-white p-2 text-xs mr-2" key={idx}>{type.replace('_', ' ')}{' '}</span>
            ))}
            </>
          )
        },
        sortable: true,
        width: 45
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'Completion',
        accessor: 'completion',
        className: 'md:hidden'
      },
      {
        Header: 'Payment Method',
        accessor: 'payment_method'
      },
      {
        Header: 'Level',
        accessor: 'level',
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
          const name = row.row.original.name
          const type = row.row.original.type
          const contact = row.row.original.contact 
          const description = row.row.original.description 
          const address = row.row.original.address 
          const city = row.row.original.city
          const zip = row.row.original.zip 
          const longitude = row.row.original.longitude
          const latitude = row.row.original.latitude 
          const operations = row.row.original.operations
          const features = row.row.original.features
          const amenities = row.row.original.amenities
          const payment_method = row.row.original.payment_method
          const completion = row.row.original.completion 
          const level = row.row.original.level 
          const status = row.row.original.status 
          const pms_enabled = row.row.original.pms_enabled
          console.log(row)
          return (
            <div className="float-left">
              <Link className="bg-gray-200 hover:bg-gray-400 text-gray-700 text-xs font-bold py-1 px-4 rounded" to={`/account/shops/${slug}`}>
                View
              </Link>{' '}
              <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" to={`/account/shops/update/${slug}`}>
                Update
              </Link>{' '}
              <Link className="bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-1 px-4 rounded" to={`/account/shops/activation/${slug}`}>
                Activation
              </Link>{' '}
              <Link className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded" onClick={() => deleteShop(slug)} to="#">
                Delete
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
  const [filteredData, setFilteredData] = useState(shops)
  const handSetData = shops => {
    setFilteredData(shops)
  }
  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
      <PageHeader title="Shop" subTitle="Accounts" >
        <Link to="/account/users/export" className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <i className="material-icons">view_module</i>
          <span>Export</span>
        </Link>
      </PageHeader>

        <DataTable columns={columns} data={shops} />
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
    shops: selectAllShops(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getShops: () => dispatch(getShopsAction()),
    deleteShop: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteShopAction(id))
          Alert('success', 'User successfully deleted!')
        }
      })
    }
  })
)(ShopsComponent)