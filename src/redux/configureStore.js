import { applyMiddleware, compose, createStore } from "redux"
import persistCombineReducers from "redux-persist/lib/persistCombineReducers"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import logger from "redux-logger"
import createFilter from "redux-persist-transform-filter"
import clients from "../configure/clients"
import apiClients from "./middleware/apiClients"
import {
  reducerName as languagesReducerName,
  reducer as languagesReducer
} from "./reducers/languages"
import reducerRegistery from "./ReducerRegistery"
import { version, name } from "../../package.json"
import { formHandlerMiddleware } from "./middleware/formHandler"

export const saveLanguageFilter = createFilter(languagesReducerName, [
  "appLanguage"
])

export const loadLanguageFilter = createFilter(languagesReducerName, null, [
  "appLanguage"
])

const configureStore = (initialState = {}, history) => {
  reducerRegistery.register("router", connectRouter(history))
  reducerRegistery.register(languagesReducerName, languagesReducer)

  const storageConfig = {
    key: name,
    storage,
    whitelist: [languagesReducerName],
    transforms: [loadLanguageFilter],
    version
  }

  const reducers = persistCombineReducers(
    storageConfig,
    reducerRegistery.getReducers()
  )

  const composeWithDevToolsExtension =
    process.env.REACT_APP_ENV === "dev" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: true,
      trace: true,
      traceLimit: 25
    })
  const composeEnhancers =
    typeof composeWithDevToolsExtension === "function"
      ? composeWithDevToolsExtension
      : compose

  const middlewares = []
  middlewares.push(routerMiddleware(history))
  middlewares.push(thunk)
  middlewares.push(apiClients(clients))
  middlewares.push(formHandlerMiddleware)

  if (
    process.env.REACT_APP_ENV === "dev" &&
    process.env.REACT_APP_REDUX_LOGER === "true"
  ) {
    middlewares.push(logger)
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
