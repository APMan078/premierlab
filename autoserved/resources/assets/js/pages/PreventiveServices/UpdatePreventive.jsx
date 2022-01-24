import { connect } from 'react-redux'
import React, { Fragment, useEffect, useState } from 'react'
import { reduxForm } from 'redux-form'
import { currentUserSelector } from 'store/selectors/session'
import { PageHeader, CollapsibleCard, LaborFields, OilFields } from 'components'
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'
import { selectShop_serviceDetails } from 'store/selectors/shop_services'
import {
  getShop_service as getShop_serviceAction,
  updateShop_service as updateShop_serviceAction,
} from 'store/action-creators/shop_services'
import { selectPms_listDetails } from 'store/selectors/pms_lists'
import {
  getPms_list as getPms_listAction
} from 'store/action-creators/pms_lists'
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
  const [values, setValues] = React.useState(initialValues || {})
  const [touchedValues, setTouchedValues] = React.useState({})
  const [errors, setErrors] = React.useState({})

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
      [name]: parseFloat(value)
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

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  }
}

function UpdatePreventiveComponent({ getShop_service, getPms_list, pms_lists, shop_services, user, match, onSubmit }) {
  const initialValues = shop_services[0]

  if (!initialValues) {
    return <Redirect to="/account/preventive-services" />
  }

  const { values, touchedValues, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValues,
    onSubmit,
    validate(values) {
      const errors = {}

      return errors
    }
  })

  const query = match.params.id
  const pms = match.params.pms 
  const populateService = async () => {
    await getShop_service(query)
  }
  const populatePmsList = async () => {
    await getPms_list(pms)
  }
  useEffect(() => {
    populateService(),
    populatePmsList()
  }, [])  

  console.log(shop_services)
  console.log(pms_lists)
  const name = shop_services[0].name
  const title = <NumberFormat value={name} displayType={'text'} thousandSeparator={true} prefix={'PMS '} suffix={' km'} renderText={value => <>{value}</>} />
  const check = pms_lists[0].check_items
  const clean = pms_lists[0].clean_items
  const change = pms_lists[0].change_items

  console.log(check)
    return(
      <Fragment>
      <div className="bb-white px-10 py-5">
        <PageHeader title={title} subTitle="Preventive Services" >
            <Link to={`/account/preventive-services/`} className="ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-sm mr-3">arrow_back</i>
              <span>Go Back</span>
            </Link>
            <Link to="#" onClick={handleSubmit} className="ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center">
              <i className="material-icons text-sm mr-3">save_alt</i>
              <span>Save</span>
            </Link>
        </PageHeader>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div className="col-span-2 mb-5">
            <CollapsibleCard title="Labor">
              <LaborFields value={values.labor} handleChange={handleChange} />
            </CollapsibleCard>
          </div>
          <div className="col-span-1 mb-5">
            <CollapsibleCard title="Regular Oil" collapse="hidden">
              <OilFields value={values.supplies.regular} handleChange={handleChange} />
            </CollapsibleCard>
          </div>
          <div className="col-span-1 mb-5">
            <CollapsibleCard title="Semi-Synthetic Oil" collapse="hidden">
              <OilFields value={values.supplies.semi} handleChange={handleChange} />            
            </CollapsibleCard>
          </div>
          <div className="col-span-1 mb-5">
            <CollapsibleCard title="Fully Synthetic Oil" collapse="hidden">
              <OilFields value={values.supplies.full} handleChange={handleChange} />
            </CollapsibleCard>
          </div>
          <div className="col-span-1 mb-5">
            <CollapsibleCard title="Shop Recommendation" collapse="hidden">
              <OilFields value={values.supplies.recommed} handleChange={handleChange} />
            </CollapsibleCard>
          </div>
          <div className="col-span-2 mb-5">
            <CollapsibleCard title="Details">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="text-xl mb-3">Check Items</div>
                  <ul className="list-disc ml-5">
                      {check.map((item,idx) => {
                        return(
                          <li key={idx}>{item}</li>
                        )
                      })}
                    </ul>
                </div>
                <div className="col-span-1">
                  <div className="text-xl mb-3">Clean Items</div>
                  <ul className="list-disc ml-5">
                    {clean.map((item,idx) => {
                      return(
                        <li key={idx}>{item}</li>
                      )
                    })}
                  </ul>
                  <div className="text-xl my-3">Change Items</div>
                  <ul className="list-disc ml-5">
                    {change.map((item,idx) => {
                      return(
                        <li key={idx}>{item}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
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
  
  const UpdatePreventive = reduxForm({
    form: 'update-preventive',
    enableReinitialize: true,
    validate: validateFields
  })(UpdatePreventiveComponent)
  
  export default connect(
    (state, props) => {
      const query = props.match.params.id
      const pms =props.match.params.pms
      return({
          shop_services: selectShop_serviceDetails(state, query),
          pms_lists: selectPms_listDetails(state, pms),
          user: currentUserSelector(state)
        }
      )},
    dispatch => ({
      getShop_service: id => dispatch(getShop_serviceAction(id)),
      getPms_list: id => dispatch(getPms_listAction(id)),
      onSubmit: values => {
        dispatch(updateShop_serviceAction(values))
        AlertMe('success', 'PMS successfully updated!')
      }
    })
  )(UpdatePreventive)