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
    var btnEditTxt = document.createTextNode("Edit")
    var btnDelTxt = document.createTextNode("Delete")
    var btndel = document.createElement("button")
    btndel.className = " btn btn-danger btn2 text-white m-1"
    btnEdit.className = " btn btn-success btn1 text-white m-1"
    

    liEle.appendChild(litxt)
    btnEdit.appendChild(btnEditTxt)
    btndel.appendChild(btnDelTxt)
    liDiv.appendChild(btnEdit)
    liDiv.appendChild(btndel)
    liEle.appendChild(liDiv)
    ulEle.appendChild(liEle)
    ulParent.appendChild(ulEle)


    liEle.className = "bg-dark mt-3 p-2 text-white d-flex justify-content-between"
    input.value=""

}
function delAll(){
    ulParent.innerHTML=""
};
