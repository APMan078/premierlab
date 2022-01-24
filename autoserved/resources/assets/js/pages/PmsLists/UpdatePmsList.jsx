import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { reduxForm } from 'redux-form'
import {  PageHeader, DynamicList, CollapsibleCard } from 'components'
import Swal from 'sweetalert2'
import { selectPms_listDetails } from 'store/selectors/pms_lists'
import { currentUserSelector } from 'store/selectors/session'
import { 
  getPms_list as getPms_listAction,
  updatePms_list as updatePms_listAction,
  deletePms_list as deletePms_listAction 

} from 'store/action-creators/pms_lists'
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios';


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

const useForm = ({ initialValues, onSubmit, validate }) => {
  const initializeValues = (obj) => JSON.parse(JSON.stringify(obj, (k, v) => (v === null ? '' : v)))
  const [values, setValues] = React.useState(initializeValues(initialValues) || {})
  const [touchedValues, setTouchedValues] = React.useState({})
  const [errors, setErrors] = React.useState({})

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function stripString(string) {
    return string.replace('_', ' ')
  }
  
  const handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    console.log(value)
    if ( target.type === "checkbox" ) {
      if( target.value === 0 ) {
        const value = false
      } else {
        const value =  true
      }
    } else {
      const value = target.value
    }
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
    event.preventDefault()
    const e = validate(values)
    setErrors({
      ...errors,
      ...e
    })
    console.log('preventives:', values);
    onSubmit({ ...values, e })
  }

  const handleDynamicList = (fields, type) => {
    const name = type
    setValues({
      ...values,
      [name]: fields
    })
  }
  

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList
  }
}

function UpdatePmsListComponent({ onSubmit, match, getPms_list, pms_lists, user }) {
  const { user_type } = user


  const query = match.params.id
  const populatePms_list = async () => {
    await getPms_list(query)
  }

  useEffect(() => {
    populatePms_list()
  }, [])  


  const initialValues = pms_lists[0]

  if (!initialValues) {
    return <Redirect to="/account/pms-lists" />
  }
  
  const { 
    values, 
    touchedValues, 
    errors, 
    handleChange, 
    handleSubmit, 
    handleBlur, 
    handleDynamicList
 } = useForm({
    initialValues,
    onSubmit,
    validate(values) {
      const errors = {}

      return errors
    }
  })

  console.log(values)

  if (user_type == 'vendor' || user_type == 'fleet') {
    return <Redirect from='/account' to="/account/overview" />
  }

  return (
    <Fragment>
      <div className="px-10 py-5">
        <div className="w-full">
          <PageHeader title="Details" subTitle="Pms_list" >
            <Link to={`/account/pms-lists/`} className="ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-xs mr-5">arrow_back</i>
              <span>Go Back</span>
            </Link>
            <Link to="#" onClick={handleSubmit} className="ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-sm mr-3">save_alt</i>
              <span>Save</span>
            </Link>
          </PageHeader>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
              <div className="rounded-lg shadow-lg bg-white">
                <div className="p-5">
                  <label htmlFor="mileage">Mileage</label>
                  <input type="text" name="mileage" value={values.mileage ? values.mileage : ''} onChange={handleChange} className="border border-gray-300 p-2 rounded my-3 block w-full" />
                </div>
              </div>
          </div>
          <div className="w-full mb-5">
            <CollapsibleCard title="Check Items">
              <DynamicList type="check_items" value={values.check_items ? values.check_items : []}  handleChange={handleDynamicList} />
            </CollapsibleCard>
          </div>
          <div className="w-full mb-5">
            <CollapsibleCard title="Clean Items" collapse="hidden">
              <DynamicList type="clean_items" value={values.clean_items ? values.clean_items : []}  handleChange={handleDynamicList} />
            </CollapsibleCard>
          </div>
          <div className="w-full mb-5">
            <CollapsibleCard title="Change Items" collapse="hidden">
              <DynamicList type="change_items" value={values.change_items ? values.change_items : []}  handleChange={handleDynamicList} />
            </CollapsibleCard>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

const validateFields = values => {
  let errors = {}

  return errors
}

const UpdatePmsList = reduxForm({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(UpdatePmsListComponent)

export default connect(
  (state, props) => {
    const query = props.match.params.id
    return({
        pms_lists: selectPms_listDetails(state, query),
        user: currentUserSelector(state)
      }
    )},
  dispatch => ({
    getPms_list: id => dispatch(getPms_listAction(id)),
    deletePms_list: id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          dispatch(deletePms_listAction(id))
          Alert('success', 'User successfully deleted!')
        }
      })
    },
    onSubmit: values => {
      dispatch(updatePms_listAction(values))
      Alert('success', 'PMS successfully updated!')
    }
  })
)(UpdatePmsList)