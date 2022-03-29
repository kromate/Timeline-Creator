import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { app } from './init';
import { useUser } from '~/composables/useGlobals';

const {user} = useUser()

export const db = getFirestore(app);

export const saveTimeline = async (timeline) => {
	const id = user.value.uid
	await setDoc(doc(db, 'timelines', uuidv4()), {...timeline, usedId:id});
}
