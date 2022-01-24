import axios from 'axios'
import { vehicleActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getVehicles = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-vehicles', () => axios.get(`/api/vehicles`))
  )

  dispatch({
    type: actions.ADD_VEHICLES,
    vehicles: response.data.data
  })
}

export const getVehicle = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-vehicle-${id}`, () => axios.get(`/api/vehicles/${id}`))
  )

  dispatch({
    type: actions.GET_VEHICLE,
    vehicles: response.data.data
  })
}

export const createVehicle = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-vehicle', () => axios.post(`/api/vehicles`, data))
  )

  dispatch({
    type: actions.ADD_VEHICLE,
    vehicles: response.data.data
  })
}

export const updateVehicle = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-vehicle-${data.id}`, () =>
      axios.put(`/api/vehicles/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_VEHICLE,
    vehicles: response.data.data
  })
}

export const deleteVehicle = id => async dispatch => {
  await dispatch(
    makeRequest(`update-vehicle-${id}`, () => axios.delete(`/api/vehicles/${id}`))
  )

  dispatch({
    type: actions.DELETE_VEHICLE,
    id
  })
}

export const saveVehicle = vehicleData => async dispatch => {
  const { id } = vehicleData

  const response = await dispatch(
    makeRequest('save-vehicle-settings', () =>
      axios.put(`/api/vehicles/${id}`, vehicleData)
    )
  )

  return response
}


