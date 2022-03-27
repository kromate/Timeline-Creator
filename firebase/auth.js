import { app } from './init';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
	if (user) {
		const uid = user.uid;
		console.log(uid)
	} else {
		// User is signed out
		// ...
	}
});


const provider = new GoogleAuthProvider();


export const googleAuth = ()=> signInWithPopup(auth, provider)
	.then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		// const credential = GoogleAuthProvider.credentialFromResult(result);
		// const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;

		console.log(user)
		// ...
	}).catch((error) => {
		console.log(error);
        
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
	
		// ...
	});