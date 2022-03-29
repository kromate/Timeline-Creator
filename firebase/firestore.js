import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';
import { app } from './init';
import { useUser } from '~/composables/useGlobals';


const {user} = useUser()

export const db = getFirestore(app);

export const saveTimeline = async (timeline) => {
	console.log(user.uid);
	console.log({...timeline, usedId:user.uid})
	await setDoc(doc(db, 'timelines', 'LA'), {...timeline, usedId:user.uid});
}
