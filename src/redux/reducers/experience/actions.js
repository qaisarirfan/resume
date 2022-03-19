import { EXPERIENCE } from "./types";

export function getExperience() {
  return {
    type: EXPERIENCE,
    request: {
      method: "get",
      url: "experience.json",
    },
  };
}
