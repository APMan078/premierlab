import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { NeutralButton, PageHeader, DataTable } from 'components'

import Swal from 'sweetalert2'
import { selectAllServices } from 'store/selectors/services'
import { currentUserSelector } from 'store/selectors/session'
import {
  getServices as getServicesAction,
  updateService as updateServiceAction,
  createService as createServiceAction,
  deleteService as deleteServiceAction
} from 'store/action-creators/services'
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
        label: 'General Services',
        value: 'General Services',
      },
      {
        label: 'Brakes',
        value: 'Brakes',
      },
      {
        label: 'Engine',
        value: 'Engine',
      },
      {
        label: 'Clutch and Transmission',
        value: 'Clutch and Transmission',
      },
      {
        label: 'Heating & AC',
        value: 'Heating & AC',
      },
      {
        label: 'Suspension & Steering',
        value: 'Suspension & Steering',
      },
      {
        label: 'Exterior & Interior',
        value: 'Exterior & Interior',
      },
      {
        label: 'Electrical',
        value: 'Electrical',
      },
      {
        label: 'Optional Services',
        value: 'Optional Services',
      }
    ]
    console.log(values.type)
    const newLabel = optionTypes.filter(option => option.value == values.type)

    console.log(newLabel[0])
    const [select, setSelect] = React.useState(newLabel[0])
    console.log(select)
    const handleSelectChange = event => {
      const value = event.value
      const label = event.label
      const name = 'type'
      setValues({
        ...values,
        [name]: value
      })
      setSelect({
        value: value, label: label
      })
    }

    function getTypesOptions () {

      return axios.get(`/api/car-makes`)
        .then(res => {
           return {options: res.data, complete: true}
        });
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
                <span className="inline-block mb-2">Service Name</span>
                <input type="text" name="name" className="w-full p-2 border" onChange={handleChange} value={values.name}/>
              </label>
            </div>
            <div className='block w-full py-2'>
              <label htmlFor="type_id">
                <span className="inline-block mb-2">Service Type</span>
                <Select className="w-full" value={select} onChange={handleSelectChange} name="type" options={optionTypes} />
              </label>
              <input type="hidden" name="id" onChange={handleChange} value={values.id}/>
            </div>
          </div>
          <div className="float-right px-10 pb-5">
            <button className="text-white p-3 bg-blue-500 hover:bg-blue-700" type="submit">{values.update}{values.create}</button>
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
        dispatch(createServiceAction(values))
        dispatch(getServicesAction())
        hideModal()
        Alert('success', 'Car Service created!')
      }
    })
  ),
  reduxForm({
    form: 'add-car-service'
  })
)(ModalComponent)

const UpdateModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(updateServiceAction(values))
        dispatch(getServicesAction())
        hideModal()
        Alert('success', 'Car Service updated!')
      }
    })
  ),
  reduxForm({
    form: 'update-car-service'
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



function ServicesComponent({ getServices, deleteService, services, user }) {
  const { user_type } = user

  if (user_type != 'admin') {
    return <Redirect from='/account' to="/account/overview" />
  }
  const { showModal } = useModal()
  const populateServices = async () => {
    await getServices()
  }

  useEffect(() => {
    populateServices()
  }, [])

  console.log(services)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Service Name',
        accessor: 'name',
        sortable: true
      },
      {
        id: "type",
        accessor: 'type',
        Cell: row => {
          const type = row.row.original.type
          return(
            <>{type}</>
          )
        },
        Header: 'Service Type',
        sortable: true,
        width: 45
      },    
      {
        id: "action",
        accessor: 'id',
        Cell: row => {
          const id = row.row.original.id
          const name = row.row.original.name
          const type = row.row.original.type
          const header = 'Update Service'
          const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
          const update = "Update Service"
          console.log(row)
          return (
            <div className="float-left">
              <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded" 
                onClick={() =>
                  showModal(UpdateModal, { id, header, name, type, className, update })
                } to="#">
                Update
              </Link>{' '}
              <Link className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded" onClick={() => deleteService(id)} to="#">
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


  const [filteredData, setFilteredData] = useState(services)
  const handleSetData = services => {
    setFilteredData(services)
  }
  const header = "Add New Car Service"
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
  const create = "Create New Car Service"
  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
      <PageHeader title="Car Services" subTitle="Master List" >
        <Link className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" 
          onClick={() =>
            showModal(CreateModal, {header, className, create})
          } to="#">
          <i className="material-icons">add</i> Add New
        </Link>
      </PageHeader>

        <DataTable columns={columns} data={services} />
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
    services: selectAllServices(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getServices: () => dispatch(getServicesAction()),
    deleteService: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteServiceAction(id))
          Alert('success', 'Car Service successfully deleted!')
        }
      })
    }
  })
)(ServicesComponent)