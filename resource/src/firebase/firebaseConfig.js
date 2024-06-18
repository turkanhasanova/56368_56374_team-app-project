import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
apiKey: "AIzaSyAhtoWlnWr7BQL5Xnx9kbjvUE-cGlmbc_0",
  authDomain: "freshgo-app.firebaseapp.com",
  projectId: "freshgo-app",
  storageBucket: "freshgo-app.appspot.com",
  messagingSenderId: "754509104495",
  appId: "1:754509104495:web:244cd310499e4a4e7f149a",
  measurementId: "G-Q6272CXWJG"
};

 firebase.initializeApp(firebaseConfig);


 const auth = firebase.auth();
 const db = firebase.firestore();
 const storage = firebase.storage();

 export { auth, db, storage }