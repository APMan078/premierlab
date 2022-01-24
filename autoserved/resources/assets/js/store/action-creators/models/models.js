import axios from 'axios'
import { modelActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getModels = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-models', () => axios.get(`/api/car-models`))
  )

  dispatch({
    type: actions.ADD_MODELS,
    models: response.data.data
  })
}

export const getModel = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-model-${id}`, () => axios.get(`/api/car-models/${id}`))
  )

  dispatch({
    type: actions.GET_MODEL,
    models: response.data.data
  })
}

export const createModel = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-model', () => axios.post(`/api/car-models`, data))
  )

  dispatch({
    type: actions.ADD_MODEL,
    models: response.data.data
  })
}

export const updateModel = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-model-${data.id}`, () =>
      axios.put(`/api/car-models/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_MODEL,
    models: response.data.data
  })
}

export const deleteModel = id => async dispatch => {
  await dispatch(
    makeRequest(`update-model-${id}`, () => axios.delete(`/api/car-models/${id}`))
  )

  dispatch({
    type: actions.DELETE_MODEL,
    id
  })
}

export const saveModel = modelData => async dispatch => {
  const { id } = modelData

  const response = await dispatch(
    makeRequest('save-model-settings', () =>
      axios.put(`/api/car-models/${id}`, modelData)
    )
  )

  return response
}


