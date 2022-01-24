import React, { useEffect } from 'react'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { TextFormLine, HiddenFormLine } from 'components'

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
      event.preventDefault()
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

export const CreditModalComponent = ({ onSubmit, initialValues, getMembers, members }) => {
    const { values, touchedValues, errors, handleChange, handleSubmit, handleBlur } = useForm({
      initialValues,
      onSubmit,
      validate(values) {
        const errors = {}
  
        if (values.customer_id === "") {
          errors.user_id = "Please select a user"
        }
  
        return errors
      }
    })
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex-grow">
            <div className="modal-body">
                <form>
                    <Field
                        className="mb-2"
                        name="slug"
                        placeholder="Slug"
                        labelText="Slug"
                        component={HiddenFormLine}
                        onChange={handleChange}
                    />
                    <Field
                        className="mb-2"
                        name="amount"
                        placeholder="Amount"
                        labelText="Amount"
                        component={TextFormLine}
                        onChange={handleChange}
                    />
                </form>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
  const UpdateCreditModal = compose(
    connect(
      (state, ownProps) => ({
        initialValues: ownProps
      }),
      (dispatch, { hideModal }) => ({
        onSubmit: values => {
          dispatch(updateMemberAction(values))
          hideModal()
          Alert('success', 'Member successfully updated!')
        }
      })
    ),
    reduxForm({
      form: 'update-member'
    })
  )(CreditModalComponent)