import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllUsers = state => {
  const dnEntities = denormalize(
    { users: Object.keys(state.entities.users) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.users
}
