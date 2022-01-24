import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllMakes = state => {
  const dnEntities = denormalize(
    { makes: Object.keys(state.entities.makes) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.makes
}

export const selectMakeDetails = (state, id) => {

  const dnEntities = denormalize(
    { makes: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.makes
}