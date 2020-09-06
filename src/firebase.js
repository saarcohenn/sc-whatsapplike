import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrj-_xVhbVvJw0NruzVD_ycYfnyGlbC_c",
    authDomain: "whats-app-clone-f3bc6.firebaseapp.com",
    databaseURL: "https://whats-app-clone-f3bc6.firebaseio.com",
    projectId: "whats-app-clone-f3bc6",
    storageBucket: "whats-app-clone-f3bc6.appspot.com",
    messagingSenderId: "1088895959608",
    appId: "1:1088895959608:web:9bad0f49fb9368b9655ccd",
    measurementId: "G-T66YL1W1EN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
