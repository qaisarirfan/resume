// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const {
	getDatabase,
	ref,
	child,
	get,
	onDisconnect,
} = require("firebase/database");

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBR5XUK5-uSF2qkiO_gDFCSFng7LLI5YxY",
	appId: "1:791655469989:web:c7149f818e5fb922434e4c",
	authDomain: "resume-f594e.firebaseapp.com",
	databaseURL:
		"https://resume-f594e-default-rtdb.asia-southeast1.firebasedatabase.app",
	measurementId: "G-Z4X6V2Q1HM",
	messagingSenderId: "791655469989",
	projectId: "resume-f594e",
	storageBucket: "resume-f594e.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// const db = getDatabase(app);

// const presenceRef = ref(db, "disconnectmessage");
// onDisconnect(presenceRef).set("I disconnected!");

const dbRef = ref(getDatabase(app));
get(child(dbRef, `experience`))
	.then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log("No data available");
		}
	})
	.catch((error) => {
		console.error(error);
	});
