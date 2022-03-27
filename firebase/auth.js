import { app } from './init';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useAlert } from '~/composables/useNotification';

const {openAlert} = useAlert()

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
		const user = result.user;
		console.log(user)
		openAlert('You have successfully signed in 🥳')
	}).catch((error) => {
		console.log(error);
		openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
	
		// ...
	});