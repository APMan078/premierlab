import cloneDeep from 'lodash.clonedeep'

import { fleetActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { fleet as fleetSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { fleets: fleetsState }
} = initialState

const deleteFleet = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const fleetsReducer = createReducer(fleetsState, {
  [fleetActions.ADD_FLEET]: normalizeAndMerge('fleets', fleetSchema, {
    singular: true
  }),
  [fleetActions.ADD_FLEETS]: normalizeAndMerge('fleets', fleetSchema),
  [fleetActions.GET_FLEET]: normalizeAndMerge('fleets', fleetSchema, {
    singular: true
  }),
  [fleetActions.UPDATE_FLEET]: normalizeAndMerge('fleets', fleetSchema, {
    singular: true
  }),
  [fleetActions.DELETE_FLEET]: deleteFleet
})
