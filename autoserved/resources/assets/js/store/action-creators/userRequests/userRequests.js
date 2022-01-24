import axios from 'axios'
import { userRequestActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getRequests = slug => async dispatch => {
  const response = await dispatch(
    makeRequest('get-requests', () => axios.get(`/api/requests`))
  )

  dispatch({
    type: actions.ADD_REQUESTS,
    requests: response.data.data
  })
}

export const getRequest = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-request-${slug}`, () => axios.get(`/api/requests/request/${slug}`))
  )

  dispatch({
    type: actions.GET_REQUEST,
    requests: response.data.data
  })
}

export const createRequest = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-request', () => axios.post(`/api/requests`, data))
  )

  dispatch({
    type: actions.ADD_REQUEST,
    requests: response.data.data
  })
}

export const updateRequest = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-request-${data.slug}`, () =>
      axios.put(`/api/requests/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_REQUEST,
    requests: response.data.data
  })
}

export const deleteRequest = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-request-${slug}`, () => axios.delete(`/api/requests/${slug}`))
  )

  dispatch({
    type: actions.DELETE_REQUEST,
    slug
  })
}

export const saveRequest = requestData => async dispatch => {
  const { slug } = requestData

  const response = await dispatch(
    makeRequest('save-request-settings', () =>
      axios.put(`/api/requests/${slug}`, requestData)
    )
  )

  return response
}


