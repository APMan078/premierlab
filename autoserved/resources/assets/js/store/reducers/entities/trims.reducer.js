import cloneDeep from 'lodash.clonedeep'

import { trimActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { trim as trimSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { trims: trimsState }
} = initialState

const deleteTrim = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const trimsReducer = createReducer(trimsState, {
  [trimActions.ADD_TRIM]: normalizeAndMerge('trims', trimSchema, {
    singular: true
  }),
  [trimActions.ADD_TRIMS]: normalizeAndMerge('trims', trimSchema),
  [trimActions.GET_TRIM]: normalizeAndMerge('trims', trimSchema, {
    singular: true
  }),
  [trimActions.UPDATE_TRIM]: normalizeAndMerge('trims', trimSchema, {
    singular: true
  }),
  [trimActions.DELETE_TRIM]: deleteTrim
})
