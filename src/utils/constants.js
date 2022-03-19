const urls = {
  production: "/assets/data/",
  development: "/assets/data/",
};

export const baseURLVercel = process.env.NEXT_PUBLIC_VERCEL_URL;
export const isDevelopment = process.env.NODE_ENV === "development";
export const baseURL = isDevelopment ? urls.development : urls.production;

const url = baseURLVercel ? `${baseURLVercel}/${baseURL}` : baseURL;

export const constants = {
  baseURL: url,
  apiURL: `${url}/api`,
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
