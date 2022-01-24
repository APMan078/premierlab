import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { linkStyle } from 'constants/styles'
import { email as emailRegex } from 'constants/regexes'
import { NeutralButton, TextFormLine } from 'components'

const validate = (values = {}) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export const ForgotPasswordForm = ({ onSubmit }) => {
  return (
    <Formik
      validate={validate}
      onSubmit={onSubmit}
      initialValues={{ email: '' }}
    >
      {() => (
        <Form>
          <Field
            type="text"
            name="email"
            labelText="Enter Your Email Address"
            component={TextFormLine}
          />
          <p className="text-xs">You will receive an email with a unique token.</p>

          <div className="flex items-center">
            <Link className={linkStyle} to="/account/login">
              Back to Login
            </Link>
            <button type="submit" className="border-0 bg-blue hover:bg-blue-dark text-white py-2 px-5 ml-auto rounded-full">
              Request
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
