import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBCuqdFQ2p8c-l7B2_aUgAxAIFI4FS76tI",
    authDomain: "goshop-9e571.firebaseapp.com",
    databaseURL: "https://goshop-9e571-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "goshop-9e571",
    storageBucket: "goshop-9e571.appspot.com",
    messagingSenderId: "895114201754",
    appId: "1:895114201754:web:ce1eed14ad14b377ad2d23",
    measurementId: "G-PX5QWDYQE7"
};

const appfirebase = initializeApp(firebaseConfig);
const db = getDatabase(appfirebase);

export { appfirebase, db };
