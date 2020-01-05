const urls = {
  prod: "/assets/data/",
  dev: "/assets/data/",
  staging: "/assets/data/"
}

export const constants = {
  baseURL: urls[process.env.REACT_APP_ENV],
  apiURL: `${urls[process.env.REACT_APP_ENV]}/api`,
  googleMapsURL: "https://maps.googleapis.com/maps/api",

  languages: {
    en: {
      code: "en",
      title: "English",
      flag: "en"
    },
    ur: {
      code: "ur",
      title: "Urdu",
      flag: "pk"
    }
  }
}

export default constants
