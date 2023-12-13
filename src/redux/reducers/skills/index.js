import { REDUCERS } from "..";
import { ERROR, LOADED, LOADING } from "../../middleware/actions";
import { createActionName, createReducer } from "../../utility";

const initialState = {
	data: [],
	isLoading: false,
	loadingError: null,
};

export const SKILLS = createActionName(REDUCERS.SKILLS, "SKILLS");

export const createLoadSkillsAction = () => {
	return {
		request: { method: "get", url: "skills.json" },
		type: SKILLS,
	};
};

export const selectSkills = (state) => state[REDUCERS.SKILLS]?.data;
export const selectIsLoading = (state) => state[REDUCERS.SKILLS]?.isLoading;
export const selectLoadingError = (state) =>
	state[REDUCERS.SKILLS]?.loadingError;

const reducers = {
	[SKILLS + LOADING](state) {
		return { ...state, isLoading: true, loadingError: null };
	},
	[SKILLS + LOADED](state, payload) {
		return {
			...state,
			data: payload.result,
			isLoading: false,
			loadingError: null,
		};
	},
	[SKILLS + ERROR](state, payload) {
		return { ...state, isLoading: false, loadingError: payload.result };
	},
};

export default createReducer(reducers, initialState);
