import get from "lodash/get"
import reducerRegistery from "../../ReducerRegistery"
import { createActionName, createReducer } from "../../utility"
import { ERROR, LOADED, LOADING } from "../../middleware/actions"

// Required variables
const initialState = {
  /* Holds the user redux object */
  data: [],
  /* Are we loading skills */
  isLoading: false,
  /* Loading skills resulted in an error */
  loadingError: null
}
export const reducerName = "skills"

// Actions
export const SKILLS = createActionName(reducerName, "SKILLS")

// Action creators
export function createLoadSkillsAction() {
  return {
    type: SKILLS,
    request: {
      method: "get",
      url: "skills.json"
    }
  }
}

// Selectors
export const selectSkills = state => get(state, `${reducerName}.data`)
export const selectIsLoading = state => get(state, `${reducerName}.isLoading`)
export const selectLoadingError = state =>
  get(state, `${reducerName}.loadingError`)

// Reducer
const reducers = {
  [SKILLS + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null }
  },
  [SKILLS + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result
    }
  },
  [SKILLS + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result }
  }
}

export const reducer = createReducer(reducers, initialState)

// Register the reducer with the registery
reducerRegistery.register(reducerName, reducer)
