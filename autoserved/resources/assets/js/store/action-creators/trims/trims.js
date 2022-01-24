import axios from 'axios'
import { trimActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getTrims = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-trims', () => axios.get(`/api/car-trims`))
  )

  dispatch({
    type: actions.ADD_TRIMS,
    trims: response.data.data
  })
}

export const getTrim = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-trim-${id}`, () => axios.get(`/api/car-trims/${id}`))
  )

  dispatch({
    type: actions.GET_TRIM,
    trims: response.data.data
  })
}

export const createTrim = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-trim', () => axios.post(`/api/car-trims`, data))
  )

  dispatch({
    type: actions.ADD_TRIM,
    trims: response.data.data
  })
}

export const updateTrim = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-trim-${data.id}`, () =>
      axios.put(`/api/car-trims/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_TRIM,
    trims: response.data.data
  })
}

export const deleteTrim = id => async dispatch => {
  await dispatch(
    makeRequest(`update-trim-${id}`, () => axios.delete(`/api/car-trims/${id}`))
  )

  dispatch({
    type: actions.DELETE_TRIM,
    id
  })
}

export const saveTrim = trimData => async dispatch => {
  const { id } = trimData

  const response = await dispatch(
    makeRequest('save-trim-settings', () =>
      axios.put(`/api/car-trims/${id}`, trimData)
    )
  )

  return response
}


