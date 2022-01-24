import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import { initialState } from 'store/initialState'
import { createReducer } from 'store/reducers/utilities'

import { overviewReducer } from './overview.reducer'
import { usersReducer } from './users.reducer'
import { membersReducer } from './members.reducer'
import { shopsReducer } from './shops.reducer'
import { fleetsReducer } from './fleets.reducer'
import { makesReducer } from './makes.reducer'
import { modelsReducer } from './models.reducer'
import { seriesReducer } from './series.reducer'
import { trimsReducer } from './trims.reducer'
import { servicesReducer } from './services.reducer'
import { pms_listsReducer } from './pmsLists.reducer'
import { shop_servicesReducer } from './shopServices.reducer'
import { vehiclesReducer } from './vehicles.reducer'
import { schedulesReducer } from './schedules.reducer'
import { requestsReducer } from './requests.reducer'

const { entities } = initialState

const singleEntitiesReducer = combineReducers({
  overview: overviewReducer,
  users: usersReducer,
  members: membersReducer,
  shops: shopsReducer,
  fleets: fleetsReducer,

  makes: makesReducer,
  models: modelsReducer,
  series: seriesReducer,
  trims: trimsReducer,
  services: servicesReducer,
  pms_lists: pms_listsReducer,
  shop_services: shop_servicesReducer,
  vehicles: vehiclesReducer,
  schedules: schedulesReducer,
  requests: requestsReducer
})

const wholeEntitiesReducer = createReducer(entities, {})

export const entitiesReducer = reduceReducers(
  entities,
  singleEntitiesReducer,
  wholeEntitiesReducer
)
