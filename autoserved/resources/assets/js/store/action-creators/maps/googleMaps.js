import axios from 'axios'

import { makeRequest } from 'store/action-creators/requests'
import { userActions as actions } from 'store/actions'

export const uploadShopMap = (fileData, shopSlug) => async dispatch => {
  const response = await dispatch(
    makeRequest('set-shop-map', () => axios.post('/api/shops/map', fileData))
  )

  dispatch({
    type: actions.SET_SHOP_MAP,
    shopSlug,
    map: response.data
  })
}

export const uploadCustomerMap = (fileData, userSlug) => async dispatch => {
    const response = await dispatch(
      makeRequest('set-customer-map', () => axios.post('/api/customers/map', fileData))
    )
  
    dispatch({
      type: actions.SET_SHOP_MAP,
      userSlug,
      map: response.data
    })
  }
