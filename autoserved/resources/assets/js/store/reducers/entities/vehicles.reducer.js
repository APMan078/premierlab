import { vehicleActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { vehicle as vehicleSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { vehicles: vehiclesState }
} = initialState

const deleteVehicle = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const vehiclesReducer = createReducer(vehiclesState, {
  [vehicleActions.ADD_VEHICLE]: normalizeAndMerge('vehicles', vehicleSchema, {
    singular: true
  }),
  [vehicleActions.ADD_VEHICLES]: normalizeAndMerge('vehicles', vehicleSchema),
  [vehicleActions.GET_VEHICLE]: normalizeAndMerge('vehicles', vehicleSchema, {
    singular: true
  }),
  [vehicleActions.UPDATE_VEHICLE]: normalizeAndMerge('vehicles', vehicleSchema, {
    singular: true
  }),
  [vehicleActions.DELETE_VEHICLE]: deleteVehicle
})
