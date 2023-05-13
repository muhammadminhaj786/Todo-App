var input = document.getElementById("input")
var ulParent = document.getElementById("ulparent")
function addTodo(){
    if(!input.value){
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
    input.value=""

}
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
