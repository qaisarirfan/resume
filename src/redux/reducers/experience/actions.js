import { EXPERIENCE } from "@src/redux/reducers/experience/types";

export const getExperience = () => {
  return {
    request: { method: "get", url: "experience.json" },
    type: EXPERIENCE,
  };
};
