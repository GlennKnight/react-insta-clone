import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBPlORJbwHOoWl96nOiHL1J3U1yXQCk1HM',
    authDomain: 'insta-clone-7832a.firebaseapp.com',
    projectId: 'insta-clone-7832a',
    storageBucket: 'insta-clone-7832a.appspot.com',
    messagingSenderId: '662084438610',
    appId: '1:662084438610:web:2ea663ef2b09024c662d8b',
    measurementId: 'G-TEQGG8SP54'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };