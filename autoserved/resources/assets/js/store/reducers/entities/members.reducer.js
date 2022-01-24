import cloneDeep from 'lodash.clonedeep'

import { memberActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { member as memberSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'
import { impersonateMember, leaveImpersonate } from '../../action-creators/members'

const {
  entities: { members: membersState }
} = initialState

const setMemberAvatar = (state, { avatar, memberSlug }) => {
  const newState = cloneDeep(state)
  newState[memberSlug].avatar = avatar

  return newState
}

const deleteMember = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const membersReducer = createReducer(membersState, {
  [memberActions.ADD_MEMBER]: normalizeAndMerge('members', memberSchema, {
    singular: true
  }),
  [memberActions.ADD_MEMBERS]: normalizeAndMerge('members', memberSchema),
  [memberActions.GET_MEMBER]: normalizeAndMerge('members', memberSchema, {
    singular: true
  }),
  [memberActions.UPDATE_MEMBER]: normalizeAndMerge('members', memberSchema, {
    singular: true
  }),
  [memberActions.DELETE_MEMBER]: deleteMember,
  [memberActions.SET_AVATAR]: setMemberAvatar,
  [memberActions.ADD_CREDITS]: normalizeAndMerge('members', memberSchema, {
    singular: true
  }),
  [memberActions.DEDUCT_CREDITS]: normalizeAndMerge('members', memberSchema, {
    singular: true
  }),
  [memberActions.IMPERSONATE_MEMBER]: impersonateMember,
  [memberActions.LEAVE_IMPERSONATE]: leaveImpersonate
})
