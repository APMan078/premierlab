import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { linkStyle } from 'constants/styles'
import { email as emailRegex } from 'constants/regexes'
import { PasswordFormLine, TextFormLine, NeutralButton, AgreeFormLine } from 'components'
import { RegistrationLink } from './RegistrationLink'

const validate = (values = {}) => {
  let errors = {}

  if (!values.first_name) {
    errors.first_name = 'This field is required'
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required'
  }

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.mobile) {
    errors.mobile = 'This field is required'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'Password does not match'
  }

  if (!values.agree) {
    errors.agree = 'This field is required'
  }

  return errors
}

export const SignUpForm = ({ onSubmit }) => (
  <Formik
    validate={validate}
    onSubmit={onSubmit}
    initialValues={{ first_name: '', last_name: '', mobile: '', email: '', password: '', password_confirmation: '' }}
  >
    {() => (
      <Form>
        <RegistrationLink></RegistrationLink>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1 md:w-1/2">
            <Field
              component={TextFormLine}
              type="text"
              name="first_name"
              labelText="First Name"
              className="px-2"
            />
          </div>
          <div className="w-full sm:w-1 md:w-1/2">
            <Field
              component={TextFormLine}
              type="text"
              name="last_name"
              labelText="Last Name"
              className="px-2"
            />
          </div>
        </div>
        <Field
          component={TextFormLine}
          type="text"
          name="mobile"
          labelText="Mobile Number"
        />
        <Field
          component={TextFormLine}
          type="text"
          name="email"
          labelText="Email"
        />
        <Field
          component={PasswordFormLine}
          type="password"
          name="password"
          labelText="Password"
        />
        <Field
          component={PasswordFormLine}
          type="password"
          name="password_confirmation"
          labelText="Confirm Password"
        />
          <Field
            type="checkbox"
            name="agree"
            component={AgreeFormLine}
          />
        <div className="hidden items-center md:flex">
          <Link className={linkStyle} to="/account/login">
            Or Login
          </Link>
          <button type="submit" className="border-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 ml-auto rounded-full">
              Signup
          </button>
        </div>
        <div className="block items-center md:hidden">
          <button type="submit" className="border-0 bg-blue-500 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-blue-600">
            Sign up
          </button>
          <Link className="block text-center border-0 bg-green-300 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-green-400" to="/account/login">
            or Login
          </Link>
        </div>
      </Form>
    )}
  </Formik>
)
