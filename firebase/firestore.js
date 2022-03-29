import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';
import { app } from './init';
import { useUser } from '~/composables/useGlobals';



export const db = getFirestore(app);

const saveTimeline = async () => {
	await setDoc(doc(db, 'timelines', 'LA'), {
		name: 'Los Angeles',
		state: 'CA',
		country: 'USA'
	});
}
