import { schema } from 'normalizr'

export const overview = new schema.Entity('overview', {}, { idAttribute: 'id'})
export const user = new schema.Entity('users', {}, { idAttribute: 'slug' })
export const member =  new schema.Entity('members', {}, { idAttribute: 'slug' })
export const shop = new schema.Entity('shops', {}, { idAttribute: 'slug' })
export const fleet = new schema.Entity('fleets', {}, { idAttribute: 'slug' })
export const make = new schema.Entity('makes', {}, { idAttribute: 'id' })
export const model = new schema.Entity('models', {}, { idAttribute: 'id' })
export const serie = new schema.Entity('series', {}, { idAttribute: 'id' })
export const trim = new schema.Entity('trims', {}, { idAttribute: 'id' })
export const service = new schema.Entity('services', {}, { idAttribute: 'id' })
export const pms_list = new schema.Entity('pms_lists', {}, { idAttribute: 'id' })
export const shop_service = new schema.Entity('shop_services', {}, { idAttribute: 'id' })
export const vehicle = new schema.Entity('vehicles', {}, { idAttribute: 'id' })
export const schedule = new schema.Entity('schedules', {}, { idAttribute: 'slug' })
export const request = new schema.Entity('requests', {}, { idAttribute: 'slug' })

export const entities = {
  overview: [overview],
  users: [user],
  members: [member],
  shops: [shop],
  fleets: [fleet],

  makes: [make],
  models: [model],
  series: [serie],
  trims: [trim],
  services: [service],
  pms_lists: [pms_list],
  shop_services: [shop_service],
  vehicles: [vehicle],
  schedules: [schedule],
  requests: [request]
}
