import cloneDeep from 'lodash.clonedeep'

import { makeActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { make as makeSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { makes: makesState }
} = initialState

const deleteMake = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const makesReducer = createReducer(makesState, {
  [makeActions.ADD_MAKE]: normalizeAndMerge('makes', makeSchema, {
    singular: true
  }),
  [makeActions.ADD_MAKES]: normalizeAndMerge('makes', makeSchema),
  [makeActions.GET_MAKE]: normalizeAndMerge('makes', makeSchema, {
    singular: true
  }),
  [makeActions.UPDATE_MAKE]: normalizeAndMerge('makes', makeSchema, {
    singular: true
  }),
  [makeActions.DELETE_MAKE]: deleteMake
})
