import axios from "axios"
import constants from "../constants"

export const configureClients = ({ baseURL, apiURL, googleMapsURL }) => ({
  default: {
    client: axios.create({
      baseURL,
      responseType: "json",
      withCredentials: true,
      headers: {
        common: {
          Accept: "application/json"
        },
        post: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
  },
  api: {
    client: axios.create({
      baseURL: apiURL,
      responseType: "json",
      withCredentials: true,
      headers: {
        common: {
          Accept: "application/json"
        },
        post: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
  },
  googleMaps: {
    client: axios.create({
      baseURL: googleMapsURL,
      responseType: "json",
      withCredentials: true,
      headers: {
        common: {
          Accept: "application/json"
        },
        post: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
  }
})

export default configureClients(constants)
