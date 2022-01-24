import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllShops = state => {
  const dnEntities = denormalize(
    { shops: Object.keys(state.entities.shops) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.shops
}

export const selectShopDetails = (state, slug) => {

  const dnEntities = denormalize(
    { shops: [slug] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.shops
}