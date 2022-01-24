import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllRequests = state => {
  const dnEntities = denormalize(
    { requests: Object.keys(state.entities.requests) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.requests
}

export const selectRequestDetails = (state, id) => {

  const dnEntities = denormalize(
    { requests: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.requests
}