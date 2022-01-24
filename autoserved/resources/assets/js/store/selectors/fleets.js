import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllFleets = state => {
  const dnEntities = denormalize(
    { fleets: Object.keys(state.entities.fleets) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.fleets
}
