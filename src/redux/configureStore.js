import { applyMiddleware, compose, createStore } from "redux";
import createFilter from "redux-persist-transform-filter";
import persistCombineReducers from "redux-persist/lib/persistCombineReducers";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { formHandlerMiddleware } from "./middleware/formHandler";
import { REDUCERS } from "./reducers";
import apiClients from "./middleware/apiClients";
import expertiseReducer from "./reducers/expertise";
import languagesReducer from "./reducers/languages";
import reducerRegistry from "./ReducerRegistry";
import skillsReducer from "./reducers/skills";
import experienceReducer from "./reducers/experience/reducer";

import { isDevelopment } from "../utils/constants";
import clients from "../config/clients";
import packageFile from "../../package.json";
import { createWrapper } from "next-redux-wrapper";

export const saveLanguageFilter = createFilter(REDUCERS.LANGUAGES, ["appLanguage"]);

export const loadLanguageFilter = createFilter(REDUCERS.LANGUAGES, null, ["appLanguage"]);

const configureStore = (initialState = {}) => {
  reducerRegistry.register(REDUCERS.EXPERIENCE, experienceReducer);
  reducerRegistry.register(REDUCERS.EXPERTISE, expertiseReducer);
  reducerRegistry.register(REDUCERS.LANGUAGES, languagesReducer);
  reducerRegistry.register(REDUCERS.SKILLS, skillsReducer);

  const storageConfig = {
    key: packageFile.name,
    storage,
    transforms: [loadLanguageFilter],
    version: packageFile.version,
    whitelist: [REDUCERS.LANGUAGES],
  };

  const reducers = persistCombineReducers(storageConfig, reducerRegistry.getReducers());

  let composeEnhancers = compose;

  if (typeof window !== "undefined") {
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
    const composeWithDevToolsExtension = isDevelopment && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    composeEnhancers = typeof composeWithDevToolsExtension === "function" ? composeWithDevToolsExtension : compose;
  }

  const middleware = [];
  middleware.push(thunk);
  middleware.push(apiClients(clients));
  middleware.push(formHandlerMiddleware);

  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

  return store;
};

export const wrapper = createWrapper(configureStore, { debug: isDevelopment });

export default configureStore;
