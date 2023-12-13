import { REDUCERS } from "..";

export const experienceData = (state) => state[REDUCERS.EXPERIENCE]?.data;
export const experienceLoader = (state) =>
	state[REDUCERS.EXPERIENCE]?.isLoading;
export const experienceLoadingError = (state) =>
	state[REDUCERS.EXPERIENCE]?.loadingError;
