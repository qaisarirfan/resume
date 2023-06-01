import { createActionName, createReducer } from "../../utility";
import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { REDUCERS } from "..";

const initialState = {
  data: [],
  isLoading: false,
  loadingError: null,
};

export const EXPERTISE = createActionName(REDUCERS.EXPERTISE, "EXPERTISE");

export const createLoadExpertiseAction = () => {
  return {
    request: { method: "get", url: "expertise.json" },
    type: EXPERTISE,
  };
};

export const selectLanguages = (state) => state[REDUCERS.EXPERTISE]?.data;
export const selectSelectedLanguage = (state) => {
  const languages = selectLanguages(state);
  if (!languages || languages.length === 0) return null;
  return languages.find((language) => language.selected) || languages.find((language) => language.default);
};
export const selectIsLoading = (state) => state[REDUCERS.EXPERTISE]?.isLoading;
export const selectLoadingError = (state) => state[REDUCERS.EXPERTISE]?.loadingError;
export const selectAppLanguage = (state) => state[REDUCERS.EXPERTISE]?.appLanguage;

const reducers = {
  [EXPERTISE + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null };
  },
  [EXPERTISE + LOADED](state, payload) {
    return {
      ...state,
      data: payload.result,
      isLoading: false,
      loadingError: null,
    };
  },
  [EXPERTISE + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
};

export default createReducer(reducers, initialState);
