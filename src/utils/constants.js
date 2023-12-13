const urls = {
	development: "/assets/data/",
	production: "./assets/data/",
};

export const isDevelopment = process.env.NODE_ENV === "development";
export const baseURL = urls[process.env.NODE_ENV];

export const constants = {
	apiURL: `${baseURL}/api`,
	baseURL,
	googleMapsURL: "https://maps.googleapis.com/maps/api",

	languages: {
		en: {
			code: "en",
			direction: "ltr",
			flag: "en",
			title: "English",
		},
		ur: {
			code: "ur",
			direction: "rtl",
			flag: "pk",
			title: "Urdu",
		},
	},
};

export default constants;
