import { denormalize } from 'normalizr'

import { entities as entitiesSchema } from 'store/schemas'

export const selectAllShop_services = state => {
  const dnEntities = denormalize(
    { shop_services: Object.keys(state.entities.shop_services) },
    entitiesSchema,
    state.entities
  )

  return dnEntities.shop_services
}

export const selectShop_serviceDetails = (state, id) => {

  const dnEntities = denormalize(
    { shop_services: [id] },
    entitiesSchema,
    state.entities
  )

  return dnEntities.shop_services
}