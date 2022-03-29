import { getFirestore, doc, setDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore/lite';
import { v4 as uuidv4 } from 'uuid';
import { app } from './init';
import { useUser } from '~/composables/useGlobals';
import { useLoading } from '~/composables/useNotification';

const { user } = useUser()
const {openLoading, closeLoading} = useLoading()

export const db = getFirestore(app);

export const saveTimeline = async (timeline) => {
	const usedId = user.value.uid
	const id = uuidv4()
	await setDoc(doc(db, 'timelines', id), {...timeline, usedId, id});
}

export const delTimeline = async (id) => {
	openLoading('Deleting the timeline')
	await deleteDoc(doc(db, 'timelines', id));
	closeLoading()
}

export const getUserTimeline = async () => {
	openLoading('Getting your timeline, this shouldn\'t take long 😙')
	const result = []
	const loading = true;
	const id = user.value.uid;
	const timelineRef = collection(db, 'timelines');
	const userTimeline = query(timelineRef, where('usedId', '==', id));
	const querySnapshot = await getDocs(userTimeline);
	querySnapshot.forEach((doc) => {
		result.push(doc.data())
	});
	closeLoading()
	return result
}