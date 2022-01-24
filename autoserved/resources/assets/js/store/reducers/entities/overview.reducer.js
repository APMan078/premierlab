import cloneDeep from 'lodash.clonedeep'

import { overviewActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { overview as overviewSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { overview: overviewState }
} = initialState

export const overviewReducer = createReducer(overviewState, {
    [overviewActions.ADD_OVERVIEW]: normalizeAndMerge('overview', overviewSchema, {
      singular: true
    })
  })