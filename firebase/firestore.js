import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from './init';



export const db = getFirestore(app);