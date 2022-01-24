import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { NeutralButton, PageHeader, DataTable } from 'components'

import Swal from 'sweetalert2'
import { selectAllMakes } from 'store/selectors/makes'
import { currentUserSelector } from 'store/selectors/session'
import {
  getMakes as getMakesAction,
  updateMake as updateMakeAction,
  createMake as createMakeAction,
  deleteMake as deleteMakeAction
} from 'store/action-creators/makes'
import { Link, Redirect } from 'react-router-dom'
import Select from 'react-select'

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
    const optionTypes = [
      {
        label: 'Car',
        value: 1,
      },
      {
        label: 'Truck',
        value: 2,
      },
      {
        label: 'Motorcycle',
        value: 3,
      }
    ]
    console.log(values.type_id)
    const newLabel = optionTypes.filter(option => option.value == values.type_id)

    console.log(newLabel[0])
    const [select, setSelect] = React.useState(newLabel[0])
    console.log(select)
    const handleSelectChange = event => {
      const value = event.value
      const label = event.label
      const name = 'type_id'
      setValues({
        ...values,
        [name]: value
      })
      setSelect({
        value: value, label: label
      })
    }
    return {
      values,
      touchedValues,
      errors,
      handleChange,
      handleSubmit,
      handleBlur,
      handleSelectChange,
      optionTypes,
      select
    }
  }

export const ModalComponent = ({ onSubmit, initialValues }) => {
  console.log(initialValues)
  const { values, touchedValues, errors, handleChange, handleSubmit, handleBlur, handleSelectChange, optionTypes, select } = useForm({
    initialValues,
    onSubmit,
    validate(values) {
      const errors = {}

      if (values.name === "") {
        errors.name = "Please specify a name"
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
          <div className="p-10 pt-5 pb-0">
            <div className="block w-full py-2">
              <label htmlFor="name">
                <span className="inline-block mb-2">Car Make Name</span>
                <input type="text" name="name" className="w-full p-2 border" onChange={handleChange} value={values.name}/>
              </label>
            </div>
            <div className='block w-full py-2'>
              <label htmlFor="type_id">
                <span className="inline-block mb-2">Vehicle Type</span>
                <Select className="w-full" value={select} onChange={handleSelectChange} name="type" options={optionTypes} />
              </label>
              <input type="hidden" name="id" onChange={handleChange} value={values.id}/>
            </div>
          </div>
          <div className="float-right px-10 pb-5">
            <button className="text-white p-3 bg-blue-500 hover:bg-blue-700" type="submit">{values.create}{values.update}</button>
          </div>
        </div>
      </form>
  )
}

const CreateModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(createMakeAction(values))
        dispatch(getMakesAction())
        hideModal()
        Alert('success', 'Car Make created!')
      }
    })
  ),
  reduxForm({
    form: 'add-car-make'
  })
)(ModalComponent)

const UpdateModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(updateMakeAction(values))
        dispatch(getMakesAction())
        hideModal()
        Alert('success', 'Car Make updated!')
      }
    })
  ),
  reduxForm({
    form: 'update-car-make'
  })
)(ModalComponent)

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



function MakesComponent({ getMakes, deleteMake, makes, user }) {
  const { user_type } = user

  if (user_type != 'admin') {
    return <Redirect from='/account' to="/account/overview" />
  }
  const { showModal } = useModal()
  const populateMakes = async () => {
    await getMakes()
  }

  useEffect(() => {
    populateMakes()
  }, [])

  console.log(makes)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Car Make Name',
        accessor: 'name',
        sortable: true
      },
      {
        id: "vehicle",
        accessor: 'type_id',
        Cell: row => {
          const type_id = row.row.original.type_id
          return(
            <>{type_id == 1 ? 'Car' : 'Truck'}</>
          )
        },
        Header: 'Vehicle Type',
        sortable: false,
        width: 45
      },    
      {
        id: "action",
        accessor: 'id',
        Cell: row => {
          const id = row.row.original.id
          const name = row.row.original.name
          const type_id = row.row.original.type_id
          const header = 'Update Car Make'
          const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
          const update = "Update Car Make"
          console.log(row)
          return (
            <div className="float-left">
              <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" 
                onClick={() =>
                  showModal(UpdateModal, { id, header, name, type_id, className, update })
                } to="#">
                Update
              </Link>{' '}
              <Link className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded" onClick={() => deleteMake(id)} to="#">
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


  const [filteredData, setFilteredData] = useState(makes)
  const handleSetData = makes => {
    setFilteredData(makes)
  }
  const header = "Add New Car Make"
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
  const create = "Create New Car Make"
  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
      <PageHeader title="Car Makes" subTitle="Master List" >
        <Link className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" 
          onClick={() =>
            showModal(CreateModal, {header, className, create})
          } to="#">
          <i className="material-icons">add</i> Add New
        </Link>
      </PageHeader>

        <DataTable columns={columns} data={makes} />
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
    makes: selectAllMakes(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getMakes: () => dispatch(getMakesAction()),
    deleteMake: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteMakeAction(id))
          Alert('success', 'Car Make successfully deleted!')
        }
      })
    }
  })
)(MakesComponent)