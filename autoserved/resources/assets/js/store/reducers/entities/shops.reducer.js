import cloneDeep from 'lodash.clonedeep'

import { shopActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { shop as shopSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { shops: shopsState }
} = initialState

const deleteShop = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const shopsReducer = createReducer(shopsState, {
  [shopActions.ADD_SHOP]: normalizeAndMerge('shops', shopSchema, {
    singular: true
  }),
  [shopActions.ADD_SHOPS]: normalizeAndMerge('shops', shopSchema),
  [shopActions.GET_SHOP]: normalizeAndMerge('shops', shopSchema, {
    singular: true
  }),
  [shopActions.UPDATE_SHOP]: normalizeAndMerge('shops', shopSchema, {
    singular: true
  }),
  [shopActions.DELETE_SHOP]: deleteShop
})
