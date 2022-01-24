import React from 'react'
import { Link } from 'react-router-dom'

import { PasswordInput, TextArea, TextInput, CheckBox, HiddenInput } from 'components'

export const FormLine = ({
  name,
  children,
  labelText,
  className = '',
  form: { touched, errors } = {}
}) => (
  <div className={`block w-full py-2 ${className}`}>
    <label className="block text-grey-dark text-sm" htmlFor={name}>
      <span className="inline-block mb-2">{labelText}</span>
      {children}
      {touched && errors[name] && (
        <div className="text-red text-xs mt-2">{errors[name]}</div>
      )}
    </label>
  </div>
)

export const FormGroupLine = ({
  name,
  children,
  labelText = '',
  form: { touched, errors } = {}
}) => (
  <div className="py-2">
    <label className="text-grey-dark text-sm mb-4" htmlFor={name}>
      <span className="inline-block mb-2">{labelText}</span>
      <div className="flex flex-wrap items-stretch w-full mb-4 relative">
        <div className="flex -mr-px">
          <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">+63</span>
        </div>
        {children}
      </div>
      {touched && errors[name] && (
          <div className="text-red text-xs mt-2">{errors[name]}</div>
        )}
    </label>
  </div>
)

export const CheckLine = ({
  name,
  children,
  labelText,
  className = '',
  form: { touched, errors } = {}
}) => (
  <div className={`block py-4 ${className}`}>
    <label className="text-grey-dark flex items-center mb-4" htmlFor={name}>
      {children}
      <span className="ml-2 inline-block mb-2">{labelText}</span>
      {touched && errors[name] && (
        <div className="text-red text-sm mt-2">{errors[name]}</div>
      )}
    </label>
  </div>
)

export const AgreeLine = ({
  name,
  children,
  labelText,
  className = '',
  form: { touched, errors } = {}
}) => (
  <div className={`block py-4 ${className}`}>
    <label className="text-grey-dark flex items-center mb-4" htmlFor={name}>
      {children}
      <span className="ml-2 inline-block mb-2 text-xs">
        I agree with the <Link className="no-underline" to="/terms-of-service" target="_new">Terms &amp; Conditions</Link> and <Link className="no-underline" to="/privacy-policy" target="_new">Privacy Policy</Link>
      </span>
    </label>
    {touched && errors[name] && (
      <div className="text-red text-xs mt-2">{errors[name]}</div>
    )}
  </div>
)

export const TextFormLine = ({ field, input, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <TextInput {...field} {...input} />
  </FormLine>
)

export const PasswordFormLine = ({ field, input, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <PasswordInput {...field} {...input} />
  </FormLine>
)

export const CheckBoxFormLine = ({ field, input, ...wrapperProps }) => (
  <CheckLine {...field} {...wrapperProps}>
    <CheckBox {...field} {...input} />
  </CheckLine>
)

export const AgreeFormLine = ({ field, input, ...wrapperProps }) => (
  <AgreeLine {...field} {...wrapperProps}>
    <CheckBox {...field} />
  </AgreeLine>
)

export const TextAreaFormLine = ({ field, input, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <TextArea {...field} {...input} />
  </FormLine>
)

export const ContactGroupLine = ({ field, input, ...wrapperProps }) => (

  <FormGroupLine {...field} {...wrapperProps}>
    <input  {...input}type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" {...field} />
  </FormGroupLine>
)

export const HiddenFormLine = ({ field, input, ...wrapperProps }) => (
  <FormLine {...field} {...wrapperProps}>
    <HiddenInput {...field} {...input} />
  </FormLine>
)