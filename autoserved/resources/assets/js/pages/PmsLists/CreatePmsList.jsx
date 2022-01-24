import { connect } from 'react-redux'
import React, { Fragment } from 'react'
import { reduxForm } from 'redux-form'
import {  PageHeader, DynamicList, CollapsibleCard } from 'components'
import Swal from 'sweetalert2'
import { 
    createPms_list as createPms_listAction,

} from 'store/action-creators/pms_lists'
import { currentUserSelector } from 'store/selectors/session'
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

function CreatePmsListComponent({ onSubmit, user }) {
  const { user_type } = user

  const initialValues = []
  
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
            <CollapsibleCard title="Clean Items">
              <DynamicList type="clean_items" value={values.clean_items ? values.clean_items : []}  handleChange={handleDynamicList} />
            </CollapsibleCard>
          </div>
          <div className="w-full mb-5">
              <CollapsibleCard title="Change Items">
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

const CreatePmsList = reduxForm({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(CreatePmsListComponent)

export default connect(
    (state) => {

        return({
            user: currentUserSelector(state)
          }
        )},
  dispatch => ({
    onSubmit: values => {
      dispatch(createPms_listAction(values))
      AlertMe('success', 'PMS successfully updated!')
    }
  })
)(CreatePmsListComponent)