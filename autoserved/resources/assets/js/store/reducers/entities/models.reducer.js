import cloneDeep from 'lodash.clonedeep'

import { modelActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { model as modelSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { models: modelsState }
} = initialState

const deleteModel = (state, { id }) => {
  const newState = { ...state }

  delete newState[id]

  return newState
}

export const modelsReducer = createReducer(modelsState, {
  [modelActions.ADD_MODEL]: normalizeAndMerge('models', modelSchema, {
    singular: true
  }),
  [modelActions.ADD_MODELS]: normalizeAndMerge('models', modelSchema),
  [modelActions.GET_MODEL]: normalizeAndMerge('models', modelSchema, {
    singular: true
  }),
  [modelActions.UPDATE_MODEL]: normalizeAndMerge('models', modelSchema, {
    singular: true
  }),
  [modelActions.DELETE_MODEL]: deleteModel
})
