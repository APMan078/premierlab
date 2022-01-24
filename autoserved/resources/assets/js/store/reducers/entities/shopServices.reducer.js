import cloneDeep from 'lodash.clonedeep'

import { shop_serviceActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { shop_service as shop_serviceSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { shop_services: shop_servicesState }
} = initialState

const deleteShop_service = (state, { id }) => {
  const newState = { ...state }

  delete newState[id]

  return newState
}

export const shop_servicesReducer = createReducer(shop_servicesState, {
  [shop_serviceActions.ADD_SHOP_SERVICE]: normalizeAndMerge('shop_services', shop_serviceSchema, {
    singular: true
  }),
  [shop_serviceActions.ADD_SHOP_SERVICES]: normalizeAndMerge('shop_services', shop_serviceSchema),
  [shop_serviceActions.GET_SHOP_SERVICE]: normalizeAndMerge('shop_services', shop_serviceSchema, {
    singular: true
  }),
  [shop_serviceActions.UPDATE_SHOP_SERVICE]: normalizeAndMerge('shop_services', shop_serviceSchema, {
    singular: true
  }),
  [shop_serviceActions.DELETE_SHOP_SERVICE]: deleteShop_service
})
