import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { PageHeader } from 'components'
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'
import { reduxForm } from 'redux-form'
import { currentUserSelector } from 'store/selectors/session'
import {
getShop_services as getShop_servicesAction,
updateShop_service as updateShop_serviceAction,
createShop_service as createShop_serviceAction,
deleteShop_service as deleteShop_serviceAction,
} from 'store/action-creators/shop_services'
import { Link, Redirect } from 'react-router-dom'

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
      console.log(values)
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

function CreatePreventiveComponent({ getShop_services, deleteShop_service, shop_services, user }) {

    return(
        <>

        </>
    )
}

const validateFields = values => {
    let errors = {}
  
    return errors
  }
  
  const CreatePreventive = reduxForm({
    form: 'create-preventive',
    enableReinitialize: true,
    validate: validateFields
  })(CreatePreventiveComponent)
  
  export default connect(
    (state) => {
      return({
          user: currentUserSelector(state)
        }
      )},
    dispatch => ({
      onSubmit: values => {
        dispatch(updateShop_serviceAction(values))
        AlertMe('success', 'PMS successfully updated!')
      }
    })
  )(CreatePreventive)