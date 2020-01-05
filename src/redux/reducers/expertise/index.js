import get from "lodash/get"
import reducerRegistery from "../../ReducerRegistery"
import { createActionName, createReducer } from "../../utility"
import { ERROR, LOADED, LOADING } from "../../middleware/actions"

// Required variables
const initialState = {
  /* Holds the user redux object */
  data: [],
  /* Are we loading expertise */
  isLoading: false,
  /* Loading expertise resulted in an error */
  loadingError: null
}
export const reducerName = "expertise"

// Actions
export const EXPERTISE = createActionName(reducerName, "EXPERTISE")

// Action creators
export function createLoadExpertiseAction() {
  return {
    type: EXPERTISE,
    request: {
      method: "get",
      url: "expertise.json"
    }
  }
}

// Selectors
export const selectLanguages = state => get(state, `${reducerName}.data`)
export const selectSelectedLanguage = state => {
  const languages = selectLanguages(state)
  if (!languages || languages.length === 0) return null
  return (
    languages.find(language => language.selected) ||
    languages.find(language => language.default)
  )
}
export const selectIsLoading = state => get(state, `${reducerName}.isLoading`)
export const selectLoadingError = state =>
  get(state, `${reducerName}.loadingError`)
export const selectAppLanguage = state =>
  get(state, `${reducerName}.appLanguage`)

// Reducer
const reducers = {
  [EXPERTISE + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null }
  },
  [EXPERTISE + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result
    }
  },
  [EXPERTISE + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result }
  }
}

export const reducer = createReducer(reducers, initialState)

// Register the reducer with the registery
reducerRegistery.register(reducerName, reducer)
