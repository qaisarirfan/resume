import { createActionName, createReducer } from "../../utility";
import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { REDUCERS } from "..";

// Required variables
const initialState = {
  data: [],
  isLoading: false,
  loadingError: null,
};

// Actions
export const EXPERTISE = createActionName(REDUCERS.EXPERTISE, "EXPERTISE");

// Action creators
export function createLoadExpertiseAction() {
  return {
    type: EXPERTISE,
    request: {
      method: "get",
      url: "expertise.json",
    },
  };
}

// Selectors
export const selectLanguages = (state) => state[REDUCERS.EXPERTISE]?.data;
export const selectSelectedLanguage = (state) => {
  const languages = selectLanguages(state);
  if (!languages || languages.length === 0) return null;
  return languages.find((language) => language.selected) || languages.find((language) => language.default);
};
export const selectIsLoading = (state) => state[REDUCERS.EXPERTISE]?.isLoading;
export const selectLoadingError = (state) => state[REDUCERS.EXPERTISE]?.loadingError;
export const selectAppLanguage = (state) => state[REDUCERS.EXPERTISE]?.appLanguage;

// Reducer
const reducers = {
  [EXPERTISE + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null };
  },
  [EXPERTISE + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result,
    };
  },
  [EXPERTISE + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
};

export default createReducer(reducers, initialState);
