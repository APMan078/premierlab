import axios from 'axios'
import { fleetActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getFleets = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-fleets', () => axios.get(`/api/fleets`))
  )

  dispatch({
    type: actions.ADD_FLEETS,
    fleets: response.data.data
  })
}

export const getFleet = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-fleet-${slug}`, () => axios.get(`/api/fleets/${slug}`))
  )

  dispatch({
    type: actions.GET_FLEET,
    fleets: response.data.data
  })
}

export const createFleet = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-fleet', () => axios.post(`/api/fleets`, data))
  )

  dispatch({
    type: actions.ADD_FLEET,
    fleets: response.data.data
  })
}

export const updateFleet = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-fleet-${data.slug}`, () =>
      axios.put(`/api/fleets/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_FLEET,
    fleets: response.data.data
  })
}

export const deleteFleet = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-fleet-${slug}`, () => axios.delete(`/api/fleets/${slug}`))
  )

  dispatch({
    type: actions.DELETE_FLEET,
    slug
  })
}

export const saveFleet = fleetData => async dispatch => {
  const { slug } = fleetData

  const response = await dispatch(
    makeRequest('save-fleet-settings', () =>
      axios.put(`/api/fleets/${slug}`, fleetData)
    )
  )

  return response
}


