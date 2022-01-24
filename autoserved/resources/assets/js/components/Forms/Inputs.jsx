import React from 'react'

const textInputClasses =
  'block w-full border border-grey-light bg-grey-lightest rounded'


export const TextInput = ({ className = '', input, ...props }) => (
  <input
    {...input}
    {...props}
    type="text"
    className={`${textInputClasses} h-10 px-2 ${className}`}
  />
)

export const PasswordInput = ({ className = '', input, ...props }) => (
  <input
    {...input}
    {...props}
    type="password"
    className={`${textInputClasses} h-10 px-2 ${className}`}
  />
)

export const TextArea = ({ className = '', input, ...props }) => (
  <textarea
    {...input}
    {...props}
    className={`${textInputClasses} h-48 p-2 ${className}`}
  />
)

export const CheckBox = ({ className = '', input, ...props }) => (
  <input
    {...input}
    {...props}
    type="checkbox"
    className={`h-10 px-2 form-checkbox`}
  />
)

export const HiddenInput = ({ input, ...props }) => (
  <input
    {...input}
    {...props}
    type="hidden"
  />
)