import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { EXPERIENCE } from "./types";

import { createReducer } from "../../utility";

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
    console.log("payload", payload);
    return {
      ...state,
      isLoading: false,
      loadingError: null,
      data: payload.result,
    };
  },
  [EXPERIENCE + ERROR](state, payload) {
    return { ...state, isLoading: false, loadingError: payload.result };
  },
};

export default createReducer(reducers, initialState);
