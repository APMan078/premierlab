import cloneDeep from 'lodash.clonedeep'

import { pms_listActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { pms_list as pms_listSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { pms_lists: pms_listsState }
} = initialState

const deletePms_list = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const pms_listsReducer = createReducer(pms_listsState, {
  [pms_listActions.ADD_PMS_LIST]: normalizeAndMerge('pms_lists', pms_listSchema, {
    singular: true
  }),
  [pms_listActions.ADD_PMS_LISTS]: normalizeAndMerge('pms_lists', pms_listSchema),
  [pms_listActions.GET_PMS_LIST]: normalizeAndMerge('pms_lists', pms_listSchema, {
    singular: true
  }),
  [pms_listActions.UPDATE_PMS_LIST]: normalizeAndMerge('pms_lists', pms_listSchema, {
    singular: true
  }),
  [pms_listActions.DELETE_PMS_LIST]: deletePms_list
})
