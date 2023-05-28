const urls = {
  production: "./assets/data/",
  development: "/assets/data/",
};

// eslint-disable-next-line no-undef
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
      direction: "ltr",
    },
    ur: {
      code: "ur",
      title: "Urdu",
      flag: "pk",
      direction: "rtl",
    },
  },
};

export default constants;
