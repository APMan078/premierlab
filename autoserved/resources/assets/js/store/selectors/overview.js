import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllOverview = state => {
  const dnEntities = denormalize(
    { overview: Object.keys(state.entities.overview) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.overview
}
