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

import { isDevelopment } from "../utils/constants";
import clients from "../config/clients";
import packageFile from "../../package.json";

export const saveLanguageFilter = createFilter(REDUCERS.LANGUAGES, ["appLanguage"]);

export const loadLanguageFilter = createFilter(REDUCERS.LANGUAGES, null, ["appLanguage"]);

const configureStore = (initialState = {}) => {
  reducerRegistry.register(REDUCERS.LANGUAGES, languagesReducer);
  reducerRegistry.register(REDUCERS.SKILLS, skillsReducer);
  reducerRegistry.register(REDUCERS.EXPERTISE, expertiseReducer);

  const storageConfig = {
    key: packageFile.name,
    storage,
    transforms: [loadLanguageFilter],
    version: packageFile.version,
    whitelist: [REDUCERS.LANGUAGES],
  };

  const reducers = persistCombineReducers(storageConfig, reducerRegistry.getReducers());

  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = globalThis || window;

  const composeWithDevToolsExtension = isDevelopment && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const composeEnhancers = typeof composeWithDevToolsExtension === "function" ? composeWithDevToolsExtension : compose;

  const middleware = [];
  middleware.push(thunk);
  middleware.push(apiClients(clients));
  middleware.push(formHandlerMiddleware);

  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

  return store;
};

export default configureStore;
