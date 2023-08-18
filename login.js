import {app, auth,getAuth,signInWithEmailAndPassword} from "./firebase.js"

let loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click',Login)
async function Login(){
    try {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        
        const userLogin = await signInWithEmailAndPassword(auth,email,password)
        const userUid =userLogin.user.uid
        console.log(userUid)
        localStorage.setItem("user" , JSON.stringify(userUid))
        alert("login")
        window.location.replace('./index.html')
    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }
}
