import { changeLanguage } from "../../../config/i18n";
import { createActionName, createReducer } from "../../utility";
import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { REDUCERS } from "..";

// Required variables
const initialState = {
  data: [],
  isLoading: false,
  loadingError: null,
  appLanguage: null,
};

// Actions
export const LANGUAGES = createActionName(REDUCERS.LANGUAGES, "LANGUAGES");
export const SELECT_LANGUAGE = createActionName(REDUCERS.LANGUAGES, "SELECT_LANGUAGE");
export const SET_APP_LANGUAGE = createActionName(REDUCERS.LANGUAGES, "SET_APP_LANGUAGE");

// Action creators
export function createSetAppLanguageAction(code) {
  changeLanguage(code);
  return {
    type: SET_APP_LANGUAGE,
    payload: code,
  };
}

// Selectors
export const selectLanguages = (state) => state[REDUCERS.LANGUAGES]?.data;
export const selectSelectedLanguage = (state) => {
  const languages = selectLanguages(state);
  if (!languages || languages.length === 0) return null;
  return languages.find((language) => language.selected) || languages.find((language) => language.default);
};
export const selectIsLoading = (state) => state[REDUCERS.LANGUAGES]?.isLoading;
export const selectLoadingError = (state) => state[REDUCERS.LANGUAGES]?.loadingError;
export const selectAppLanguage = (state) => state[REDUCERS.LANGUAGES]?.appLanguage;

// Reducer
const reducers = {
  [LANGUAGES + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null };
  },
  [LANGUAGES + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result,
    };
  },
  [LANGUAGES + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
  [SELECT_LANGUAGE + LOADING](state) {
    return {
      ...state,
      isLoading: true,
      loadingError: null,
    };
  },
  [SELECT_LANGUAGE + ERROR](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: payload.result,
    };
  },
  [SELECT_LANGUAGE + LOADED](state) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
    };
  },
  [SET_APP_LANGUAGE](state, payload) {
    return {
      ...state,
      appLanguage: payload,
    };
  },
};

export default createReducer(reducers, initialState);
