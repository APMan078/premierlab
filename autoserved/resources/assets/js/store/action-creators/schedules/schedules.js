import axios from 'axios'
import { scheduleActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getSchedules = slug => async dispatch => {
  const response = await dispatch(
    makeRequest('get-schedules', () => axios.get(`/api/car-schedules/${slug}`))
  )

  dispatch({
    type: actions.ADD_SCHEDULES,
    schedules: response.data.data
  })
}

export const getSchedule = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-schedule-${slug}`, () => axios.get(`/api/car-schedules/schedule/${slug}`))
  )

  dispatch({
    type: actions.GET_SCHEDULE,
    schedules: response.data.data
  })
}

export const createSchedule = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-schedule', () => axios.post(`/api/car-schedules`, data))
  )

  dispatch({
    type: actions.ADD_SCHEDULE,
    schedules: response.data.data
  })
}

export const updateSchedule = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-schedule-${data.slug}`, () =>
      axios.put(`/api/car-schedules/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_SCHEDULE,
    schedules: response.data.data
  })
}

export const deleteSchedule = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-schedule-${slug}`, () => axios.delete(`/api/car-schedules/${slug}`))
  )

  dispatch({
    type: actions.DELETE_SCHEDULE,
    slug
  })
}

export const saveSchedule = scheduleData => async dispatch => {
  const { slug } = scheduleData

  const response = await dispatch(
    makeRequest('save-schedule-settings', () =>
      axios.put(`/api/car-schedules/${slug}`, scheduleData)
    )
  )

  return response
}


