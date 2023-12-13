import humanizeDuration from "humanize-duration";
import { DateTime, Interval } from "luxon";

/*
 * Remove special symbols and extra spaces and replace with underscore
 * using the replace method
 * https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re
 */
export const removeSpecialCharactersWithUnderscore = (str) => {
	return str.replace(/[^A-Z0-9]+/giu, "_").toLowerCase();
};

export const durationInMilliseconds = (startDate, endDate) => {
	const start = DateTime.fromJSDate(new Date(startDate));
	const end = DateTime.fromJSDate(new Date(endDate));
	return Interval.fromDateTimes(start, end).toDuration().valueOf();
};

export const toDuration = (startDate, endDate) => {
	const formatted = durationInMilliseconds(startDate, endDate);
	return humanizeDuration(formatted, { largest: 2, round: true });
};
