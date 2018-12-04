import firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCc3Blw7YmOjhQwOvNtc8vsQj4I6N29hZM",
    authDomain: "checkrvn.firebaseapp.com",
    databaseURL: "https://checkrvn.firebaseio.com",
    projectId: "checkrvn",
    storageBucket: "checkrvn.appspot.com",
    messagingSenderId: "413009153078"
};

export const authConfig = {
	googlePermissions: ["profile","email"]
};

export const uiConfig = {
	signInFlow: "popup",
	signInSuccessUrl: "/signIn",
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	]
};
