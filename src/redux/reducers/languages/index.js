import get from "lodash/get"
import reducerRegistery from "../../ReducerRegistery"
import { createActionName, createReducer } from "../../utility"
import { ERROR, LOADED, LOADING } from "../../middleware/actions"
import { changeLanguage } from "../../../configure/i18n"

// Required variables
const initialState = {
  /* Holds the user redux object */
  data: [],
  /* Are we loading languages */
  isLoading: false,
  /* Loading languages resulted in an error */
  loadingError: null,
  appLanguage: null
}
export const reducerName = "language"

// Actions
export const LANGUAGES = createActionName(reducerName, "LANGUAGES")
export const SELECT_LANGUAGE = createActionName(reducerName, "SELECT_LANGUAGE")
export const SET_APP_LANGUAGE = createActionName(
  reducerName,
  "SET_APP_LANGUAGE"
)

// Action creators
export function createSetAppLanguageAction(code) {
  changeLanguage(code)
  return {
    type: SET_APP_LANGUAGE,
    payload: code
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
  [LANGUAGES + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null }
  },
  [LANGUAGES + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result
    }
  },
  [LANGUAGES + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result }
  },
  [SELECT_LANGUAGE + LOADING](state) {
    return {
      ...state,
      isLoading: true,
      loadingError: null
    }
  },
  [SELECT_LANGUAGE + ERROR](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: payload.result
    }
  },
  [SELECT_LANGUAGE + LOADED](state) {
    return {
      ...state,
      isLoading: false,
      loadingError: null
    }
  },
  [SET_APP_LANGUAGE](state, payload) {
    return {
      ...state,
      appLanguage: payload
    }
  }
}

export const reducer = createReducer(reducers, initialState)

// Register the reducer with the registery
reducerRegistery.register(reducerName, reducer)
