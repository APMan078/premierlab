import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from 'react-context-modals'
import { NeutralButton, PageHeader, DataTable } from 'components'

import Swal from 'sweetalert2'
import { selectAllRequests } from 'store/selectors/request'
import { currentUserSelector } from 'store/selectors/session'
import {
  getRequests as getRequestsAction,
  updateRequest as updateRequestAction,
  createRequest as createRequestAction,
  deleteRequest as deleteRequestAction
} from 'store/action-creators/userRequests'
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
        label: ' ',
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
                <span className="inline-block mb-2">  Request Name</span>
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
        dispatch(createRequestAction(values))
        dispatch(getRequestsAction())
        hideModal()
        Alert('success', '  Request created!')
      }
    })
  ),
  reduxForm({
    form: 'add- -request'
  })
)(ModalComponent)

const UpdateModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(updateRequestAction(values))
        dispatch(getRequestsAction())
        hideModal()
        Alert('success', '  Request updated!')
      }
    })
  ),
  reduxForm({
    form: 'update- -request'
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



function RequestsComponent({ getRequests, deleteRequest, requests, user }) {
  const { user_type } = user


  const { showModal } = useModal()
  const populateRequests = async () => {
    await getRequests()
  }

  useEffect(() => {
    populateRequests()
  }, [])

  console.log(requests)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Request Details',
        accessor: 'service_name',
        sortable: true,
        Cell: row => {
          const created = new Date(row.row.original.updated_at)
          const newDate = new Date()
          const diffTime = newDate.getTime() - created.getTime()
          const diffDays = (diffTime / (1000 * 3600 * 24)).toFixed(0)
          return(
            <>
              <span className="capitalize text-blue-700">{row.row.original.car.short_name}</span>
              <div className="text-gray-500 text-xs">Requested: {diffDays} {diffDays < 2 ? 'day' : 'days'} ago</div>
            </>
          )
        }
      },
      {
        id: "schedule",
        Header: 'Schedule',
        sortable: true,
        className: "text-center",
        Cell: row => {
          const schedules = row.row.original.preferred_schedule
          const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          const findDay = (date) => {
            const weekday = new Array(7)
            weekday[0] = "Sunday"
            weekday[1] = "Monday"
            weekday[2] = "Tuesday"
            weekday[3] = "Wednesday"
            weekday[4] = "Thursday"
            weekday[5] = "Friday"
            weekday[6] = "Saturday"
            return  weekday[date.getDay()]
          }
          const parseDate = (date) => {
            const suffix = date.getDate() < 4 ? 'rd' : 'th'
            return months[date.getMonth()] + '.' + date.getDate() + suffix + ", " + date.getFullYear()
          }
          return(
            <>
              { schedules.map((schedule, idx) => {
                const date = new Date(schedule.date)
                return(
                  <span key={idx} className="text-white bg-gray-800 rounded p-2 text-xs">
                    <span>({findDay(date)}) {parseDate(date)}</span>{' '}<span className="capitalize">- {schedule.time}</span>
                  </span> 
                )
              })}
            </>
          )
        }
      }, 
      {
        Header: 'Type',
        accessor: 'service_name',
        sortable: true,
        className: "text-center"
      }, 
      {
        Header: 'City',
        accessor: 'city',
        sortable: true,
        className: "text-center"
      }, 
      {
        Header: 'Status',
        accessor: 'status',
        className: "text-center",
        sortable: true,
        Cell: row => {
          const status = row.row.original.status
          return(
            <>
              {status === 'open' &&
                <span className="capitalize text-sm rounded text-white p-2 bg-green-500">{status}</span>
              }
              {status === 'accepted' &&
                <span className="capitalize text-sm rounded text-white p-2 bg-green-500">{status}</span>
              }
              {status === 'cancelled' &&
                <span className="capitalize text-sm rounded text-white p-2 bg-red-500">{status}</span>
              }
              {status === 'expired' &&
                <span className="capitalize text-sm rounded text-white p-2 bg-grey-600">{status}</span>
              }
            </>
          )
        }
      }, 
      {
        id: "action",
        accessor: 'id',
        Cell: row => {
          const id = row.row.original.id
          const name = row.row.original.name
          const type_id = row.row.original.type_id
          const header = 'Update Request'
          const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
          const update = "Update Request"
          console.log(row)
          return (
            <div className="float-left">
              <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded" 
                onClick={() =>
                  showModal(UpdateModal, { id, header, name, type_id, className, update })
                } to="#">
                Re-Open
              </Link>{' '}
              <Link className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded" onClick={() => deleteRequest(id)} to="#">
                Cancel
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

  const shop_columns = React.useMemo(
    () => [
      {
        Header: 'Request Details',
        accessor: 'service_name',
        sortable: true,
        Cell: row => {
          const created = new Date(row.row.original.updated_at)
          const newDate = new Date()
          const diffTime = newDate.getTime() - created.getTime()
          const diffDays = (diffTime / (1000 * 3600 * 24)).toFixed(0)
          return(
            <>
              <span className="capitalize text-blue-700">{row.row.original.car.short_name}</span>
              <div className="text-gray-800 text-xs">{row.row.original.service_name}</div>
              <div className="text-gray-500 text-xs">Requested: {diffDays} {diffDays < 2 ? 'day' : 'days'} ago</div>
            </>
          )
        }
      },
      {
        id: "schedule",
        Header: 'Schedule',
        sortable: true,
        className: "text-center",
        Cell: row => {
          const schedules = row.row.original.preferred_schedule
          const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          const findDay = (date) => {
            const weekday = new Array(7)
            weekday[0] = "Sunday"
            weekday[1] = "Monday"
            weekday[2] = "Tuesday"
            weekday[3] = "Wednesday"
            weekday[4] = "Thursday"
            weekday[5] = "Friday"
            weekday[6] = "Saturday"
            return  weekday[date.getDay()]
          }
          const parseDate = (date) => {
            const suffix = date.getDate() < 4 ? 'rd' : 'th'
            return months[date.getMonth()] + '.' + date.getDate() + suffix + ", " + date.getFullYear()
          }
          return(
            <>
              { schedules.map((schedule, idx) => {
                const date = new Date(schedule.date)
                return(
                  <span key={idx} className="text-white bg-gray-800 rounded p-2 text-xs">
                    <span>({findDay(date)}) {parseDate(date)}</span>{' '}<span className="capitalize">- {schedule.time}</span>
                  </span> 
                )
              })}
            </>
          )
        }
      }, 
      {
        Header: 'City',
        accessor: 'city',
        sortable: true,
        className: "text-center"
      },
      {
        Header: 'Distance',
        accessor: 'distance',
        sortable: true,
        className: "text-center",
        Cell: row => {
          const distance = row.row.original.distance
          return(
            <>
              {distance.toFixed(4)} km
            </>
          )
        }
      },  
      {
        id: "action",
        accessor: 'id',
        Cell: row => {
          const id = row.row.original.id
          const name = row.row.original.name
          const type_id = row.row.original.type_id
          const header = 'Update Request'
          const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
          const update = "Update Request"
          console.log(row)
          return (
            <div className="float-left">
              <Link className="bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-2 px-4 rounded" 
                onClick={() =>
                  showModal(UpdateModal, { id, header, name, type_id, className, update })
                } to="#">
                  <i className="material-icons mr-2 text-xs">check</i>
                Create Estimate
              </Link>{' '}
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

  const [filteredData, setFilteredData] = useState(requests)
  const handleSetData = requests => {
    setFilteredData(requests)
  }
  const header = "Add New Request"
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible"
  const create = "Create New Request"
  return (
    <Fragment>
      <div className="bb-white px-10 py-5">
        <PageHeader title="  Requests" subTitle="Account" />
        <DataTable columns={user_type === 'vendor' ? shop_columns : columns} data={requests} />
      </div>
    </Fragment>
  )
}

export default connect(
  state => ({
  requests: selectAllRequests(state),
    user: currentUserSelector(state)
  }),
  dispatch => ({
    getRequests: () => dispatch(getRequestsAction()),
    deleteRequest: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deleteRequestAction(id))
          Alert('success', '  Request successfully deleted!')
        }
      })
    }
  })
)(RequestsComponent)