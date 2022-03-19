import { DateTime, Interval } from "luxon";
import humanizeDuration from "humanize-duration";

// Remove special symbols and extra spaces and replace with underscore
// using the replace method
// https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re
export const removeSpecialCharactersWithUnderscore = (str) => {
  return str.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
};

export const toDuration = (startDate, endDate) => {
  const start = DateTime.fromJSDate(startDate ? new Date(startDate) : new Date());
  const end = DateTime.fromJSDate(endDate ? new Date(endDate) : new Date());
  const formatted = Interval.fromDateTimes(start, end).toDuration().valueOf();
  console.log("formatted", formatted);
  return humanizeDuration(formatted, { round: true, largest: 2 });
};
