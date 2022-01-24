import { scheduleActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { schedule as scheduleSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { schedules: schedulesState }
} = initialState

const deleteSchedule = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const schedulesReducer = createReducer(schedulesState, {
  [scheduleActions.ADD_SCHEDULE]: normalizeAndMerge('schedules', scheduleSchema, {
    singular: true
  }),
  [scheduleActions.ADD_SCHEDULES]: normalizeAndMerge('schedules', scheduleSchema),
  [scheduleActions.GET_SCHEDULE]: normalizeAndMerge('schedules', scheduleSchema, {
    singular: true
  }),
  [scheduleActions.UPDATE_SCHEDULE]: normalizeAndMerge('schedules', scheduleSchema, {
    singular: true
  }),
  [scheduleActions.DELETE_SCHEDULE]: deleteSchedule
})
