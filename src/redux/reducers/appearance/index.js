import { createActionName, createReducer } from "@src/redux/utility";
import { REDUCERS } from "@src/redux/reducers";

const initialState = {
  mode: "light",
};

export const MODE = createActionName(REDUCERS.APPEARANCE, "MODE");

export const setAppearanceMode = (code) => {
  return {
    payload: code,
    type: MODE,
  };
};

export const selectAppearanceMode = (state) => state[REDUCERS.APPEARANCE]?.mode;

const reducers = {
  [MODE](state, payload) {
    return {
      ...state,
      mode: payload,
    };
  },
};

export default createReducer(reducers, initialState);
