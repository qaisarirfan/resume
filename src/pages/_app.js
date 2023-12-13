import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";

import CssBaseline from "@mui/material/CssBaseline";

import Theme from "../Theme";

import configureI18n from "../config/i18n";
import configureStore from "../redux/configureStore";

let initialState = {};
if (typeof window !== "undefined") {
	const { __INITIAL_STATE__ } = window;
	initialState = __INITIAL_STATE__;
}

const store = configureStore(initialState);
const persistor = persistStore(store);
configureI18n();

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} />
			<Theme>
				<CssBaseline />
				<Component {...pageProps} />
			</Theme>
		</Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
	pageProps: {},
};
