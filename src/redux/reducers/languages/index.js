import { changeLanguage } from "@src/config/i18n";
import { createActionName, createReducer } from "@src/redux/utility";
import { REDUCERS } from "@src/redux/reducers";

const initialState = {
  appLanguage: "en",
};

export const SET_APP_LANGUAGE = createActionName(REDUCERS.LANGUAGES, "SET_APP_LANGUAGE");

export const setAppLanguageAction = (code) => {
  changeLanguage(code);
  return {
    payload: code,
    type: SET_APP_LANGUAGE,
  };
};

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
