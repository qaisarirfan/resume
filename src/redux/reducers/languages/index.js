import { changeLanguage } from "../../../config/i18n";
import { createActionName, createReducer } from "../../utility";
import { REDUCERS } from "..";

const initialState = {
  appLanguage: "en",
};

export const SET_APP_LANGUAGE = createActionName(REDUCERS.LANGUAGES, "SET_APP_LANGUAGE");

export function setAppLanguageAction(code) {
  changeLanguage(code);
  return {
    type: SET_APP_LANGUAGE,
    payload: code,
  };
}

export const selectAppLanguage = (state) => state[REDUCERS.LANGUAGES]?.appLanguage;

const reducers = {
  [SET_APP_LANGUAGE](state, payload) {
    return {
      ...state,
      appLanguage: payload,
    };
  },
};

export default createReducer(reducers, initialState);
