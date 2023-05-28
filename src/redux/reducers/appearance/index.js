import { createActionName, createReducer } from "../../utility";

import { REDUCERS } from "..";

const initialState = {
  mode: "light",
};

export const MODE = createActionName(REDUCERS.APPEARANCE, "MODE");

export function setAppearanceMode(code) {
  return {
    type: MODE,
    payload: code,
  };
}

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
