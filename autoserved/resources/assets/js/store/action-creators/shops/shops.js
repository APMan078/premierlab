import axios from 'axios'
import { shopActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getShops = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-shops', () => axios.get(`/api/shops`))
  )

  dispatch({
    type: actions.ADD_SHOPS,
    shops: response.data.data
  })
}

export const getShop = slug => async dispatch => {
  const response = await dispatch(
    makeRequest(`get-shop-${slug}`, () => axios.get(`/api/shops/${slug}`))
  )

  dispatch({
    type: actions.GET_SHOP,
    shops: response.data.data
  })
}

export const createShop = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-shop', () => axios.post(`/api/shops`, data))
  )

  dispatch({
    type: actions.ADD_SHOP,
    shops: response.data.data
  })
}

export const updateShop = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-shop-${data.slug}`, () =>
      axios.put(`/api/shops/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_SHOP,
    shops: response.data.data
  })
}

export const deleteShop = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-shop-${slug}`, () => axios.delete(`/api/shops/${slug}`))
  )

  dispatch({
    type: actions.DELETE_SHOP,
    slug
  })
}

export const saveShop = shopData => async dispatch => {
  const { slug } = shopData

  const response = await dispatch(
    makeRequest('save-shop-settings', () =>
      axios.put(`/api/shops/${slug}`, shopData)
    )
  )

  return response
}


