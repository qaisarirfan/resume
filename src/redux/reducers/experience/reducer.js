import { createReducer } from "../../utility";
import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { EXPERIENCE } from "./types";

const initialState = {
  data: [],
  isLoading: false,
  loadingError: null,
};

const reducers = {
  [EXPERIENCE + LOADING](state) {
    return { ...state, isLoading: true, loadingError: null };
  },
  [EXPERIENCE + LOADED](state, payload) {
    return {
      ...state,
      data: payload.result,
      isLoading: false,
      loadingError: null,
    };
  },
  [EXPERIENCE + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
};

export default createReducer(reducers, initialState);
