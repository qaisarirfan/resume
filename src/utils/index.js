// Remove special symbols and extra spaces and replace with underscore
// using the replace method
// https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re
export const removeSpecialCharactersWithUnderscore = (str) => {
  return str.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
};
