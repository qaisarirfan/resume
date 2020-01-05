import React from "react"
import ReactDOM from "react-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createBrowserHistory } from "history"
import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/lib/persistStore"

import App from "./routes"
import * as serviceWorker from "./serviceWorker"
import configureStore from "./redux/configureStore"
import configureI18n, { languageIsRTL } from "./configure/i18n"

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const theme = createMuiTheme({
  direction: languageIsRTL() ? "rtl" : "ltr",
  shadows: Array(25).fill("none")
})
const history = createBrowserHistory()
const store = configureStore(initialState, history)
const persistor = persistStore(store)
configureI18n()

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
