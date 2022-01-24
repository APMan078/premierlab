import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllMembers = state => {
  const dnEntities = denormalize(
    { members: Object.keys(state.entities.members) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.members
}
