import axios from 'axios'
import { overviewActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getOverview = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-overview', () => axios.get(`/api/overview`))
  )

  dispatch({
    type: actions.ADD_OVERVIEW,
    overview: response.data.data
  })
}