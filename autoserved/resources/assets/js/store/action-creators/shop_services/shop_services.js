import axios from 'axios'
import { shop_serviceActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getShop_services = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-shop_services', () => axios.get(`/api/shop/services`))
  )

  dispatch({
    type: actions.ADD_SHOP_SERVICES,
    shop_services: response.data.data
  })
}

export const getShop_service = id => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-shop_service-${id}`, () => axios.get(`/api/shop/services/${id}`))
  )

  dispatch({
    type: actions.GET_SHOP_SERVICE,
    shop_services: response.data.data
  })
}

export const createShop_service = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-shop_service', () => axios.post(`/api/shop/services`, data))
  )

  dispatch({
    type: actions.ADD_SHOP_SERVICE,
    shop_services: response.data.data
  })
}

export const updateShop_service = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-shop_service-${data.id}`, () =>
      axios.put(`/api/shop/services/${data.id}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_SHOP_SERVICE,
    shop_services: response.data.data
  })
}

export const deleteShop_service = id => async dispatch => {
  await dispatch(
    makeRequest(`update-shop_service-${id}`, () => axios.delete(`/api/shop/services/${id}`))
  )

  dispatch({
    type: actions.DELETE_SHOP_SERVICE,
    id
  })
}

export const saveShop_service = shop_serviceData => async dispatch => {
  const { id } = shop_serviceData

  const response = await dispatch(
    makeRequest('save-shop_service-settings', () =>
      axios.put(`/api/shop/services/${id}`, shop_serviceData)
    )
  )

  return response
}


