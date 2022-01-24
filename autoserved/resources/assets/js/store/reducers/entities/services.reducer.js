import cloneDeep from 'lodash.clonedeep'

import { serviceActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { service as serviceSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { services: servicesState }
} = initialState

const deleteService = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const servicesReducer = createReducer(servicesState, {
  [serviceActions.ADD_SERVICE]: normalizeAndMerge('services', serviceSchema, {
    singular: true
  }),
  [serviceActions.ADD_SERVICES]: normalizeAndMerge('services', serviceSchema),
  [serviceActions.GET_SERVICE]: normalizeAndMerge('services', serviceSchema, {
    singular: true
  }),
  [serviceActions.UPDATE_SERVICE]: normalizeAndMerge('services', serviceSchema, {
    singular: true
  }),
  [serviceActions.DELETE_SERVICE]: deleteService
})
