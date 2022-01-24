import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllVehicles = state => {
  const dnEntities = denormalize(
    { vehicles: Object.keys(state.entities.vehicles) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.vehicles
}

export const selectVehicleDetails = (state, id) => {

  const dnEntities = denormalize(
    { vehicles: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.vehicles
}