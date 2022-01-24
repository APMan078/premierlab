import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllPms_lists = state => {
  const dnEntities = denormalize(
    { pms_lists: Object.keys(state.entities.pms_lists) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.pms_lists
}

export const selectPms_listDetails = (state, slug) => {

  const dnEntities = denormalize(
    { pms_lists: [slug] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.pms_lists
}