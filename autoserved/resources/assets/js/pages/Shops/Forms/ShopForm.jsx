import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'

import { email as emailRegex } from 'constants/regexes'
import { PositiveButton, TextFormLine, PictureUpload } from 'components'

function validateNumber(number) {
  const regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(number)
}

const validate = (values = {}) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'This field is required'
  }

  if (!values.type) {
    errors.type = 'This field is required'
  }

  if (validateNumber(values.mobile) == false) {
    errors.mobile = 'Incorrect Mobile Number Format'
  }

  if (!values.address) {
    errors.address = 'This field is required'
  } 

  if (!values.city) {
    errors.city = 'This field is required'
  } 

  if (!values.zip) {
    errors.zip = 'This field is required'
  } 


  return errors
}

const ShopFormComponent = ({
  user,
  onSubmit,
  className = '',
  avatarUploadHandler
}) => (
  <Formik
    validate={validate}
    onSubmit={onSubmit}
    initialValues={user}
    validateOnChange={false}
  >
    {() => (
      <Form className={className}>
        <div className="flex items-center my-4">
          <Field
            name="avatar"
            component={PictureUpload}
            uploadHandler={avatarUploadHandler}
            className="mr-10"
          />
          <div className="flex-grow">
            <Field
              name="first_name"
              component={TextFormLine}
              labelText="First Name"
            />
            <Field
              name="last_name"
              component={TextFormLine}
              labelText="Last Name"
            />
            <div className="text-sm text-gray-700 py-2">Email Address</div>
            <div className="border p-2 text-gray-500">{user.email}</div>
            <Field
              name="mobile"
              component={TextFormLine}
              labelText="Contact Number"
            />
            <div className="text-sm text-gray-700 py-2">Country</div>
            <div className="border p-2 text-gray-500">{user.country}</div>
          </div>
        </div>

        <div className="flex border-grey-light hover:text-white">
          <PositiveButton type="submit" className="ml-auto hover:bg-gray-800">
            Save User Details
          </PositiveButton>
        </div>
      </Form>
    )}
  </Formik>
)

export const ShopForm = connect(state => {
  const {
    session: { currentUser }
  } = state
  return {
    user: state.entities.users[currentUser]
  }
}, null)(ShopFormComponent)
