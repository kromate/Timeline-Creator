import { app } from './init';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useAlert, useLoading } from '~/composables/useNotification';



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


export const googleAuth = () => {
	const {openAlert} = useAlert()
	const {openLoading, closeLoading} = useLoading()

	openLoading('Logging you in... 🤩')
	signInWithPopup(auth, provider)
		.then((result) => {
			closeLoading()
			const user = result.user;
			console.log(user)
			openAlert('You have successfully signed in 🥳')
		}).catch((error) => {
			closeLoading()
			console.log(error);
			openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
	
		// ...
		});
} 

export const signOutUser = () => {
	signOut(auth).then(() => {
		// Sign-out successful.
	}).catch((error) => {
		openAlert(`Oops seems something went wrong 😕 : ${error.message}`)
	});
}