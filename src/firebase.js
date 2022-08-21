import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHrNiihdsUk2ZnLKwahdjOuR0a4SQJ9YU",
  authDomain: "chat-application-200e0.firebaseapp.com",
  projectId: "chat-application-200e0",
  storageBucket: "chat-application-200e0.appspot.com",
  messagingSenderId: "1059811995572",
  appId: "1:1059811995572:web:65f3862e3e9c3b29d14ce1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;