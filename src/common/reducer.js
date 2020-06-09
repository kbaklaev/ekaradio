import { initialState } from './var'

export const reducer = (state, action) => {
  return action.station ? {
    ...initialState,
    ...{ [action.station]: !state[action.station] }
  } : state
}
