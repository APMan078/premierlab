import axios from 'axios'
import { serviceActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getServices = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-services', () => axios.get(`/api/services`))
  )

  dispatch({
    type: actions.ADD_SERVICES,
    services: response.data.data
  })
}

export const getService = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-service-${id}`, () => axios.get(`/api/services/${id}`))
  )

  dispatch({
    type: actions.GET_SERVICE,
    services: response.data.data
  })
}

export const createService = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-service', () => axios.post(`/api/services`, data))
  )

  dispatch({
    type: actions.ADD_SERVICE,
    services: response.data.data
  })
}

export const updateService = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-service-${data.id}`, () =>
      axios.put(`/api/services/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_SERVICE,
    services: response.data.data
  })
}

export const deleteService = id => async dispatch => {
  await dispatch(
    makeRequest(`update-service-${id}`, () => axios.delete(`/api/services/${id}`))
  )

  dispatch({
    type: actions.DELETE_SERVICE,
    id
  })
}

export const saveService = serviceData => async dispatch => {
  const { id } = serviceData

  const response = await dispatch(
    makeRequest('save-service-settings', () =>
      axios.put(`/api/services/${id}`, serviceData)
    )
  )

  return response
}


