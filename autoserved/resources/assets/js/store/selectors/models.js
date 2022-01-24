import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllModels = state => {
  const dnEntities = denormalize(
    { models: Object.keys(state.entities.models) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.models
}

export const selectModelDetails = (state, id) => {

  const dnEntities = denormalize(
    { models: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.models
}