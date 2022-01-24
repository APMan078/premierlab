import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { linkStyle } from 'constants/styles'
import { email as emailRegex } from 'constants/regexes'
import { PasswordFormLine, TextFormLine, NeutralButton, CheckBoxFormLine } from 'components'

const validateLogin = (values = {}) => {
  let errors = {}

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

  return errors
}

export default ({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validate={validateLogin}
      initialValues={{ email: '', password: '' }}
    >
      {props => (
        <Form>
          <Field
            type="text"
            name="email"
            labelText="Email"
            component={TextFormLine}
          />
          <Field
            type="password"
            name="password"
            labelText="Password"
            component={PasswordFormLine}
          />
          <Field
            type="checkbox"
            name="remember_me"
            labelText="Remember me"
            component={CheckBoxFormLine}
          />
          <div className="hidden items-center md:flex">
            <Link className={linkStyle} to="/account/signup">
              Create a new account
            </Link>
            <span className="inline-block px-2">|</span>
            <Link className={linkStyle} to="/account/forgot-password">
              Forgot Password?
            </Link>

            <button type="submit" className="border-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 ml-auto rounded-full">
              Log In
            </button>
          </div>
          <div className="block items-center md:hidden">
            <button type="submit" className="border-0 bg-blue-500 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-blue-600">
              Log In
            </button>
            <Link className="block text-center border-0 bg-green-300 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-green-400" to="/account/signup">
              Create a new account
            </Link>
            <Link className="block text-center border-0 bg-gray-400 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-gray-500" to="/account/forgot-password">
              Forgot Password?
            </Link>

          </div>
        </Form>
      )}
    </Formik>
  )
}
