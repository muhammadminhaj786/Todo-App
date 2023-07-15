
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
