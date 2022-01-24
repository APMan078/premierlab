import axios from 'axios'
import { pms_listActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getPms_lists = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-pms_lists', () => axios.get(`/api/pms-lists`))
  )

  dispatch({
    type: actions.ADD_PMS_LISTS,
    pms_lists: response.data.data
  })
}

export const getPms_list = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-pms_list-${id}`, () => axios.get(`/api/pms-lists/${id}`))
  )

  dispatch({
    type: actions.GET_PMS_LIST,
    pms_lists: response.data.data
  })
}

export const createPms_list = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-pms_list', () => axios.post(`/api/pms-lists`, data))
  )

  dispatch({
    type: actions.ADD_PMS_LIST,
    pms_lists: response.data.data
  })
}

export const updatePms_list = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-pms_list-${data.id}`, () =>
      axios.put(`/api/pms-lists/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_PMS_LIST,
    pms_lists: response.data.data
  })
}

export const deletePms_list = id => async dispatch => {
  await dispatch(
    makeRequest(`update-pms_list-${id}`, () => axios.delete(`/api/pms-lists/${id}`))
  )

  dispatch({
    type: actions.DELETE_PMS_LIST,
    id
  })
}

export const savePms_list = pms_listData => async dispatch => {
  const { id } = pms_listData

  const response = await dispatch(
    makeRequest('save-pms_list-settings', () =>
      axios.put(`/api/pms-lists/${id}`, pms_listData)
    )
  )

  return response
}


