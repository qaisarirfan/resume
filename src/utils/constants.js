const urls = {
  production: "/assets/data/",
  development: "/assets/data/",
};

export const isDevelopment = process.env.NODE_ENV === "development";
export const baseURL = isDevelopment ? urls.development : urls.production;

export const constants = {
  baseURL: baseURL,
  apiURL: `${baseURL}/api`,
  googleMapsURL: "https://maps.googleapis.com/maps/api",

  languages: {
    en: {
      code: "en",
      title: "English",
      flag: "en",
    },
    ur: {
      code: "ur",
      title: "Urdu",
      flag: "pk",
    },
  },
};

export default constants;
