import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllTrims = state => {
  const dnEntities = denormalize(
    { trims: Object.keys(state.entities.trims) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.trims
}

export const selectTrimDetails = (state, slug) => {

  const dnEntities = denormalize(
    { trims: [slug] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.trims
}