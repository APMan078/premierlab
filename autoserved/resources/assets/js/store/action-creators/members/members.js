import axios from 'axios'
import { memberActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getMembers = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-members', () => axios.get(`/api/users`))
  )

  dispatch({
    type: actions.ADD_MEMBERS,
    members: response.data.data
  })
}

export const getMember = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-member-${slug}`, () => axios.get(`/api/users/${slug}`))
  )

  dispatch({
    type: actions.GET_MEMBER,
    members: response.data.data
  })
}

export const createMember = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-member', () => axios.post(`/api/users`, data))
  )

  dispatch({
    type: actions.ADD_MEMBER,
    members: response.data.data
  })
}

export const updateMember = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-member-${data.slug}`, () =>
      axios.put(`/api/users/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_MEMBER,
    members: response.data.data
  })
}

export const deleteMember = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-member-${slug}`, () => axios.delete(`/api/users/${slug}`))
  )

  dispatch({
    type: actions.DELETE_MEMBER,
    slug
  })
}

export const addCredits = data => async dispatch => {
  const response = await dispatch(
    makeRequest('add_user_credits', () =>
      axios.post(`/api/users/deposit`, data)
    )
  )

  return response
}

export const deductCredits = data => async dispatch => {
  const response = await dispatch(
    makeRequest('deduct_user_credits', () =>
      axios.post(`/api/users/withdraw`, data)
    )
  )

  return response
}

export const impersonateMember = (slug, impersonator) => async dispatch => {
  await dispatch(
    makeRequest(`impersonate-member-${slug}`, () => axios.get(`/api/users/impersonate/${slug}/${impersonator}`))
  )

  dispatch({
    type: actions.IMPERSONATE_MEMBER,
    slug
  })
}

export const leaveImpersonate = () => async dispatch => {
  await dispatch(
    makeRequest(`leave-impersonate-member`, () => axios.get(`/api/users/impersonate/leave`))
  )

  dispatch({
    type: actions.IMPERSONATE_MEMBER
  })
}