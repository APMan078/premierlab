import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllSeries = state => {
  const dnEntities = denormalize(
    { series: Object.keys(state.entities.series) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.series
}

export const selectSerieDetails = (state, slug) => {

  const dnEntities = denormalize(
    { series: [slug] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.series
}