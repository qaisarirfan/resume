import { EXPERIENCE } from "./types";

export const getExperience = () => {
  return {
    request: { method: "get", url: "experience.json" },
    type: EXPERIENCE,
  };
};
