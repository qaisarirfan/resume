import axios from "axios";

import constants from "../utils/constants";

export const configureClients = ({ baseURL, apiURL, googleMapsURL }) => ({
	api: {
		client: axios.create({
			baseURL: apiURL,
			headers: {
				common: {
					Accept: "application/json",
				},
				post: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
			responseType: "json",
			withCredentials: true,
		}),
	},
	default: {
		client: axios.create({
			baseURL,
			headers: {
				common: {
					Accept: "application/json",
				},
				post: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
			responseType: "json",
			withCredentials: true,
		}),
	},
	googleMaps: {
		client: axios.create({
			baseURL: googleMapsURL,
			headers: {
				common: {
					Accept: "application/json",
				},
				post: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
			responseType: "json",
			withCredentials: true,
		}),
	},
});

export default configureClients(constants);
