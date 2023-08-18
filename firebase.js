// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs,deleteDoc,updateDoc,doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIKDUU_aNo-5T5VA3WDihzuoTcfhjDtVM",
  authDomain: "todo-app-58cbc.firebaseapp.com",
  projectId: "todo-app-58cbc",
  storageBucket: "todo-app-58cbc.appspot.com",
  messagingSenderId: "972778544994",
  appId: "1:972778544994:web:72a91a034be3720d0f163b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Auth
const auth = getAuth();

// Initialize firestore
const db = getFirestore(app);

console.log(app)

export{
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
}
