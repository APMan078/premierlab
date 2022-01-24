import axios from 'axios'
import { serieActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getSeries = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-series', () => axios.get(`/api/car-series`))
  )

  dispatch({
    type: actions.ADD_SERIES,
    series: response.data.data
  })
}

export const getSerie = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-serie-${id}`, () => axios.get(`/api/car-series/${id}`))
  )

  dispatch({
    type: actions.GET_SERIE,
    series: response.data.data
  })
}

export const createSerie = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-serie', () => axios.post(`/api/car-series`, data))
  )

  dispatch({
    type: actions.ADD_SERIE,
    series: response.data.data
  })
}

export const updateSerie = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-serie-${data.id}`, () =>
      axios.put(`/api/car-series/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_SERIE,
    series: response.data.data
  })
}

export const deleteSerie = id => async dispatch => {
  await dispatch(
    makeRequest(`update-serie-${id}`, () => axios.delete(`/api/car-series/${id}`))
  )

  dispatch({
    type: actions.DELETE_SERIE,
    id
  })
}

export const saveSerie = serieData => async dispatch => {
  const { id } = serieData

  const response = await dispatch(
    makeRequest('save-serie-settings', () =>
      axios.put(`/api/car-series/${id}`, serieData)
    )
  )

  return response
}


