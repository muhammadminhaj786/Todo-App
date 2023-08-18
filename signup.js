import {app, auth} from "./firebase.js"
import {getAuth, createUserWithEmailAndPassword,getFirestore,addDoc,collection,db} from "./firebase.js"
console.log(auth)

let submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click',createUer)
async function createUer(e){
    try {
        let fullName = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        const userAuth = await createUserWithEmailAndPassword(auth,email,password)
        const userUid = userAuth.user.uid
        console.log(userUid)
        const userObj ={
            fullName,
            email,
            password,
            userid:userUid
        }
        const docRef = await addDoc(collection(db,'users'),userObj)
         
        alert('signed in',userAuth)
        window.location.replace('./login.html')
    } catch (error) {
        console.log(error.message)
        alert(error.measage)
    }
}
