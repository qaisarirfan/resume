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
export const SKILLS = createActionName(REDUCERS.SKILLS, "SKILLS");

// Action creators
export function createLoadSkillsAction() {
  return {
    type: SKILLS,
    request: {
      method: "get",
      url: "skills.json",
    },
  };
}

// Selectors
export const selectSkills = (state) => state[REDUCERS.SKILLS]?.data;
export const selectIsLoading = (state) => state[REDUCERS.SKILLS]?.isLoading;
export const selectLoadingError = (state) => state[REDUCERS.SKILLS]?.loadingError;

// Reducer
const reducers = {
  [SKILLS + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null };
  },
  [SKILLS + LOADED](state, payload) {
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result,
    };
  },
  [SKILLS + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
};

export default createReducer(reducers, initialState);
