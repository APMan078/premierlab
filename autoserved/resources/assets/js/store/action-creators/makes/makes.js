import axios from 'axios'
import { makeActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getMakes = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-makes', () => axios.get(`/api/car-makes`))
  )

  dispatch({
    type: actions.ADD_MAKES,
    makes: response.data.data
  })
}

export const getMake = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-make-${id}`, () => axios.get(`/api/car-makes/${id}`))
  )

  dispatch({
    type: actions.GET_MAKE,
    makes: response.data.data
  })
}

export const createMake = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-make', () => axios.post(`/api/car-makes`, data))
  )

  dispatch({
    type: actions.ADD_MAKE,
    makes: response.data.data
  })
}

export const updateMake = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-make-${data.id}`, () =>
      axios.put(`/api/car-makes/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_MAKE,
    makes: response.data.data
  })
}

export const deleteMake = id => async dispatch => {
  await dispatch(
    makeRequest(`update-make-${id}`, () => axios.delete(`/api/car-makes/${id}`))
  )

  dispatch({
    type: actions.DELETE_MAKE,
    id
  })
}

export const saveMake = makeData => async dispatch => {
  const { id } = makeData

  const response = await dispatch(
    makeRequest('save-make-settings', () =>
      axios.put(`/api/car-makes/${id}`, makeData)
    )
  )

  return response
}


