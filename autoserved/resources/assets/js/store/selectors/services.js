import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllServices = state => {
  const dnEntities = denormalize(
    { services: Object.keys(state.entities.services) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.services
}

export const selectServiceDetails = (state, slug) => {

  const dnEntities = denormalize(
    { services: [slug] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.services
}