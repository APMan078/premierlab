import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllSchedules = state => {
  const dnEntities = denormalize(
    { schedules: Object.keys(state.entities.schedules) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.schedules
}

export const selectScheduleDetails = (state, id) => {

  const dnEntities = denormalize(
    { schedules: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.schedules
}