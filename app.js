
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBeyYxu0xhEIPAQVfMjXjrdEENHB4bfmtY",
    authDomain: "todo-app-a40c2.firebaseapp.com",
    projectId: "todo-app-a40c2",
    storageBucket: "todo-app-a40c2.appspot.com",
    messagingSenderId: "890383502147",
    appId: "1:890383502147:web:d605088a04cdc6ca5b3df6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //initialize firestor
  const db = getFirestore(app)


var input = document.getElementById("input")
var ulParent = document.getElementById("ulparent")
//get add task button
var addBtn = document.getElementById('add-todo')
//get del task button
var delBtn = document.getElementById('del-todo')
addBtn.addEventListener('click',addTodo)
async function addTodo(){
    try{    if(!input.value){
        return
    }
    var ulEle = document.createElement("ul")
    var liEle = document.createElement("li")
    var litxt = document.createTextNode(input.value)
    var liDiv = document.createElement("div")
    var btnEdit = document.createElement("button")
    btnEdit.innerHTML = "Edit"
    btnEdit.setAttribute("onclick" , "editTodo(this)")
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delte"
    
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")

    btnEdit.className = "btn btn-primary m-2"
    deleteBtn.className = "btn btn-danger m-2"

    liEle.appendChild(litxt)
    liDiv.appendChild(btnEdit)
    liDiv.appendChild(deleteBtn)
    liEle.appendChild(liDiv)
    ulEle.appendChild(liEle)
    ulParent.appendChild(ulEle)


    liEle.className = "bg-dark mt-3 p-2 text-white d-flex justify-content-between"
    var task = input.value
    //working on db
    //creating a task obj
    const taskObj = {
        task,
    }
    const decRef = await addDoc(collection(db,'task'),taskObj)}
    catch(err){
        console.log(err.message,'error')
    }


    input.value=""
}

// creating a onload function when user load data get from db and show in ui
window.addEventListener('load',getTask)
async function getTask(){
    try{
        const getData = await getDocs(collection(db,'task'))
        getData.forEach(function(doc){
            var myData = doc.data()
            //working on ui
            var taskPost = `         <ul>
            <li class="bg-dark mt-3 p-2 text-white d-flex justify-content-between">${myData.task}
                <div class="lidiv">
                    <button class=" btn btn-primary m-2">Edit</button>
                    <button class=" btn btn-danger m-2">Delete</button>
                </div>
            </li>
         </ul>`
            ulParent.innerHTML += taskPost
        })
    }
    catch(error){
        console.log(error.meaasge)
    }

}


//creating edittodo function
function editTodo(el){
    var li=el.parentNode.parentNode
    var val = li.firstChild.nodeValue
    var prom = prompt("Edit ", val)
    li.firstChild.nodeValue = prom
     

}
function deleteTodo(elem) {

    elem.parentNode.parentNode.remove()
}
function delAll(){
    ulParent.innerHTML=""
};

//continue but bugs

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//   import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBeyYxu0xhEIPAQVfMjXjrdEENHB4bfmtY",
//     authDomain: "todo-app-a40c2.firebaseapp.com",
//     projectId: "todo-app-a40c2",
//     storageBucket: "todo-app-a40c2.appspot.com",
//     messagingSenderId: "890383502147",
//     appId: "1:890383502147:web:d605088a04cdc6ca5b3df6"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   //initialize firestor
//   const db = getFirestore(app)


// var input = document.getElementById("input")
// var ulParent = document.getElementById("ulparent")
// const addBtn = document.getElementById('add-todo')

// addBtn.addEventListener('click',addTodo)


// // creating a onload function when user load data get from db and show in ui
// // window.addEventListener('load',getTask)
// // async function getTask(){
// //     try{
// //         const getData = await getDocs(collection(db,'task'))
// //         getData.forEach(function(doc){
// //             // var myData = doc.data().task
// //             //working on ui
// //             createUi(doc.data().task,doc.id)
// //         })
// //     }
// //     catch(error){
// //         console.log(error.message)
// //     }

// // }

// //test
// window.addEventListener('load',getTask)
// async function getTask() {
//     try {
//         const arr = []
//         const querySnapshot = await getDocs(((collection,db),'task'))
//         querySnapshot.forEach(function (doc) {
//             console.log(doc.id, doc.data())
//             const todoValue = doc.data().task
//             createUi(todoValue, doc.id)
//             // arr.push({
//             //     id: doc.id,
//             //     todo: doc.data()
//             // })
//         });
//         // console.log("array", arr)


//     } catch (error) {
//         console.log(error.message, "error")
//         alert(error.message)
//     }
// }

// // async function addTodo(){
// //     try{    if(!input.value){
// //         return
// //     }
// //     // var ulEle = document.createElement("ul")
// //     // var liEle = document.createElement("li")
// //     // var litxt = document.createTextNode(input.value)
// //     // var liDiv = document.createElement("div")
// //     // var btnEdit = document.createElement("button")
// //     // btnEdit.innerHTML = "Edit"
// //     // btnEdit.setAttribute("click" , "editTodo()")
// //     // var deleteBtn = document.createElement("button")
// //     // deleteBtn.innerHTML = "Delte"
    
// //     // deleteBtn.setAttribute("id" , "delBtn")

// //     // btnEdit.className = "btn btn-primary m-2"
// //     // deleteBtn.className = "btn btn-danger m-2"

// //     // liEle.appendChild(litxt)
// //     // liDiv.appendChild(btnEdit)
// //     // liDiv.appendChild(deleteBtn)
// //     // liEle.appendChild(liDiv)
// //     // ulEle.appendChild(liEle)
// //     // ulParent.appendChild(ulEle)


// //     // liEle.className = "bg-dark mt-3 p-2 text-white d-flex justify-content-between"

// //     // var task = input.value
// //     //working on db
// //     //creating a task obj

// //     const taskObj = {
// //         task: input.value,
// //     }
// //     const docRef = await addDoc(collection(db,'task'),taskObj)

// //     //call create ui function 
// //     createUi(input.value,docRef.id)
// //     input.value=""

// //     }
// //     catch(err){
// //         console.log(err.message,'error')
// //     }
// // }

// //test
// async function addTodo() {
//     try {
//         if (!input.value) {
//             alert("ENTER TODO VALUEs")
//             return
//         }
//         const data = {
//             task: input.value
//         }
//         const docRef = await addDoc((db,'task'), data)
//         console.log("Document written with ID: ", docRef.id);
//         createUi(input.value, docRef.id)
//         input.value = ""
//     } catch (error) {
//         console.log("error", error.message)
//         alert(error.message)
//     }
// }

// //creating edittodo function
// async function editTodo(el){
//     try{
//         var li=el.target.parentNode.parentNode
//         var val = li.firstChild.nodeValue
//         console.log(li)
//         var prom = prompt("Edit ", val)
//         li.firstChild.nodeValue = prom
     
//     }
//     catch(error){
//         console.log(error.meaasge)
//     }

// }
// function deleteTodo(elem) {

//     elem.parentNode.parentNode.remove()
// }


// //create ui function
// // function createUi(addTodoVal,id){
// //     var taskPost = `         <ul>
// //     <li id = ${id} class="bg-dark mt-3 p-2 text-white d-flex justify-content-between">${addTodoVal}
// //         <div class="lidiv">
// //             <button class=" btn btn-primary m-2 id="editBtn">Edit</button>
// //             <button class=" btn btn-danger m-2" id="delBtn">Delete</button>
// //         </div>
// //     </li>
// //  </ul>`
// //     ulParent.innerHTML += taskPost

// //     //get edit task button
// //     var editBtn = document.getElementById('editBtn')
// //     //get del task button
// //     var delBtn = document.getElementById('delBtn')
// //     editBtn.addEventListener('click',editTodo)
// //     delBtn.addEventListener('click',deleteTodo)

    
// // }

// //test
// function createUi(addTodoVal, id) {

//     const todoUI = `         <ul>
//     //     <li id = ${id} class="bg-dark mt-3 p-2 text-white d-flex justify-content-between">${addTodoVal}
//     //         <div class="lidiv">
//     //             <button class=" btn btn-primary m-2 id="editBtn">Edit</button>
//     //             <button class=" btn btn-danger m-2" id="delBtn">Delete</button>
//     //         </div>
//     //     </li>
//     //  </ul>`
//     ulParent.innerHTML += todoUI

//     const editBtn = document.querySelector("#editBtn")
//     const deleteBtn = document.querySelector("#deleteBtn")

//     editBtn.addEventListener("click", editTodo)
//     deleteBtn.addEventListener("click", deleteTodo)

// }
// function delAll(){
//     ulParent.innerHTML=""
// };
