
import {app,auth,signOut,getDocs,collection ,db, addDoc,deleteDoc,updateDoc,doc} from "./firebase.js"
var getUsers = JSON.parse(localStorage.getItem("user"))

if(!getUsers){
  window.location.replace('./login.html')
 

}else{
  console.log(getUsers)  
  let logoutBtn = document.getElementById('logout')
  let para = document.getElementById('para')
  // let showTask = document.querySelector('.showTask')
  let Add = document.getElementById('add')
  // let edit = document.getElementById('edit')
  // let deleteBtn = document.getElementById('delete')
  let parent = document.querySelector('.parent')
  
  console.log(getUsers)
  logoutBtn.addEventListener('click',Logout)
  function Logout(){
      signOut(auth).then(() => {
          // Sign-out successful.
          alert('logout')
          window.location.replace('./login.html')
        }).catch((error) => {
          // An error happened.
        });
        localStorage.removeItem('user')
  }
  
  Add.addEventListener('click',addTask)
  async function addTask(){
    try {
      let inp = document.getElementById('inp')
      const taskObj = {
        todo:inp.value,
    
      }
      const taskRef = await addDoc(collection(db,'tasks'),taskObj)
      console.log(taskObj)
      console.log("Document written with ID: ", taskRef.id);
      createUi(inp.value, taskRef.id)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  
  
  
  
  
  window.addEventListener('load',showTask)
  async function showTask(){
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const todoValue = doc.data().todo
      createUi(todoValue,doc.id)
      
      // deleteBtn.addEventListener('click',deleteTask)
  
  });
  }
  
  
  async function editTodo(el) {
    // console.log("editTodo()", el.target.parentNode.parentNode.
    //     firstChild.nodeValue)
    try {
  
        var li = el.target.parentNode.parentNode
        var placeHolder = li.firstChild.nodeValue
        var editValue = prompt("Edit Todo", placeHolder)
        console.log(li.id, "id")
        const updateData = await updateDoc(doc(db, "tasks", li.id), {
            todo: editValue
        })
  
        console.log("editValue", editValue)
        li.firstChild.nodeValue = editValue
  
    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }
  
  
  }
  
  async function deleteTodo(elem) {
    try {
      var li = elem.target.parentNode.parentNode
      console.log(li.id)
      await deleteDoc(doc(db, "tasks", li.id));
      elem.target.parentNode.parentNode.remove()
    
    } catch (error) {
        console.log(error.message)
    }
  }
  
  
  
  function createUi(todoValue,id){
    
    var liElement = document.createElement("li")
    liElement.id = id
    liElement.innerHTML = todoValue
    liElement.className = "list-group-item d-flex align-items-center justify-content-between"
  
    var div = document.createElement("div")
    var editBtn = document.createElement("button")
    var deleteBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    editBtn.addEventListener("click", editTodo)
  
  
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.addEventListener("click", deleteTodo)
  
    editBtn.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"
  
    div.appendChild(editBtn)
    div.appendChild(deleteBtn)
  
    liElement.appendChild(div)
    parent.appendChild(liElement)
  }
}

