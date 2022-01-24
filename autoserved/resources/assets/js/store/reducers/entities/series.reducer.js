import cloneDeep from 'lodash.clonedeep'

import { serieActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { serie as serieSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { series: seriesState }
} = initialState

const deleteSerie = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const seriesReducer = createReducer(seriesState, {
  [serieActions.ADD_SERIE]: normalizeAndMerge('series', serieSchema, {
    singular: true
  }),
  [serieActions.ADD_SERIES]: normalizeAndMerge('series', serieSchema),
  [serieActions.GET_SERIE]: normalizeAndMerge('series', serieSchema, {
    singular: true
  }),
  [serieActions.UPDATE_SERIE]: normalizeAndMerge('series', serieSchema, {
    singular: true
  }),
  [serieActions.DELETE_SERIE]: deleteSerie
})
