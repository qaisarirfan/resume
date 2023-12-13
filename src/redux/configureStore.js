import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import persistCombineReducers from "redux-persist/lib/persistCombineReducers";
import storage from "redux-persist/lib/storage";

import apiClients from "./middleware/apiClients";
import { formHandlerMiddleware } from "./middleware/formHandler";

import reducerRegistry from "./ReducerRegistry";
import appearanceReducer from "./reducers/appearance";
import experienceReducer from "./reducers/experience/reducer";
import expertiseReducer from "./reducers/expertise";
import languagesReducer from "./reducers/languages";
import skillsReducer from "./reducers/skills";

import clients from "../config/clients";
import { isDevelopment } from "../utils/constants";
import { REDUCERS } from "./reducers";

const saveLanguageFilter = createFilter(REDUCERS.LANGUAGES, ["appLanguage"]);
const loadLanguageFilter = createFilter(REDUCERS.LANGUAGES, null, [
	"appLanguage",
]);

const saveAppearanceFilter = createFilter(REDUCERS.APPEARANCE, ["mode"]);
const loadAppearanceFilter = createFilter(REDUCERS.APPEARANCE, null, ["mode"]);

const getReducers = () => {
	reducerRegistry.register(REDUCERS.APPEARANCE, appearanceReducer);
	reducerRegistry.register(REDUCERS.EXPERIENCE, experienceReducer);
	reducerRegistry.register(REDUCERS.EXPERTISE, expertiseReducer);
	reducerRegistry.register(REDUCERS.LANGUAGES, languagesReducer);
	reducerRegistry.register(REDUCERS.SKILLS, skillsReducer);
	return reducerRegistry.getReducers();
};

const configure = (initialState = {}) => {
	const storageConfig = {
		key: "resume",
		storage,
		transforms: [
			saveLanguageFilter,
			loadLanguageFilter,
			saveAppearanceFilter,
			loadAppearanceFilter,
		],
		version: "1",
		whitelist: [REDUCERS.LANGUAGES, REDUCERS.APPEARANCE],
	};

	const reducers = persistCombineReducers(storageConfig, getReducers());

	const store = configureStore({
		devTools: true,
		middleware: (gDM) =>
			gDM({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(apiClients(clients), formHandlerMiddleware),
		preloadedState: initialState,
		reducer: reducers,
	});

	return store;
};

export const wrapper = createWrapper(configure, { debug: isDevelopment });

export default configure;
