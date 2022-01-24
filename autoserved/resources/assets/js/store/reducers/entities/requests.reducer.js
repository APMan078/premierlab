import { userRequestActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { request as requestSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { requests: requestsState }
} = initialState

const deleteRequest = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const requestsReducer = createReducer(requestsState, {
  [userRequestActions.ADD_REQUEST]: normalizeAndMerge('requests', requestSchema, {
    singular: true
  }),
  [userRequestActions.ADD_REQUESTS]: normalizeAndMerge('requests', requestSchema),
  [userRequestActions.GET_REQUEST]: normalizeAndMerge('requests', requestSchema, {
    singular: true
  }),
  [userRequestActions.UPDATE_REQUEST]: normalizeAndMerge('requests', requestSchema, {
    singular: true
  }),
  [userRequestActions.DELETE_REQUEST]: deleteRequest
})
