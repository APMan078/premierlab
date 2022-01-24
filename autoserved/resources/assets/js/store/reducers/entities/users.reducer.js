import cloneDeep from 'lodash.clonedeep'

import { userActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { user as userSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { users: usersState }
} = initialState

const setUserAvatar = (state, { avatar, userSlug }) => {
  const newState = cloneDeep(state)
  newState[userSlug].avatar = avatar

  return newState
}

const deleteUser = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const usersReducer = createReducer(usersState, {
  [userActions.ADD_USER]: normalizeAndMerge('users', userSchema, {
    singular: true
  }),
  [userActions.ADD_USERS]: normalizeAndMerge('users', userSchema),
  [userActions.GET_USER]: normalizeAndMerge('users', userSchema, {
    singular: true
  }),
  [userActions.UPDATE_USER]: normalizeAndMerge('users', userSchema, {
    singular: true
  }),
  [userActions.DELETE_USER]: deleteUser,
  [userActions.SET_AVATAR]: setUserAvatar,
  [userActions.SET_CURRENT_USER_INFO]: normalizeAndMerge('users', userSchema, {
    singular: true
  })
})
