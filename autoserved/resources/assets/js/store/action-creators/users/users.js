import axios from 'axios'
import { userActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getUsers = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-users', () => axios.get(`/api/users`))
  )

  dispatch({
    type: actions.ADD_USERS,
    users: response.data.data
  })
}

export const getUser = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-user-${slug}`, () => axios.get(`/api/users/${slug}`))
  )

  dispatch({
    type: actions.GET_USER,
    users: response.data.data
  })
}

export const createUser = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-user', () => axios.post(`/api/users`, data))
  )

  dispatch({
    type: actions.ADD_USER,
    users: response.data.data
  })
}

export const updateUser = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-user-${data.slug}`, () =>
      axios.put(`/api/users/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_USER,
    users: response.data.data
  })
}

export const deleteUser = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-user-${slug}`, () => axios.delete(`/api/users/${slug}`))
  )

  dispatch({
    type: actions.DELETE_USER,
    slug
  })
}

export const saveUser = userData => async dispatch => {
  const { slug } = userData

  const response = await dispatch(
    makeRequest('save-user-settings', () =>
      axios.put(`/api/users/${slug}`, userData)
    )
  )

  return response
}

export const changePassword = data => async dispatch => {
  const { slug } = data

  const response = await dispatch(
    makeRequest('change-user-password', () =>
      axios.put(`/api/users/${slug}/update-password`, data)
    )
  )

  return response
}

