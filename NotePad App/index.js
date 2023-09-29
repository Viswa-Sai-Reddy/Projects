const notesContainer = document.querySelector(".notesContainer")
const createBtn = document.querySelector(".createBtn")
let notes = document.querySelectorAll(".inputBox")

function showData(){
    notesContainer.innerHTML = localStorage.getItem("note")
}
showData();
function updateStorage(){
    localStorage.setItem("note",notesContainer.innerHTML);
}


createBtn.addEventListener('click',() =>{
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.setAttribute('class','inputBox')
    inputBox.setAttribute("contenteditable",'true')
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img)
} )


notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".inputBox")
        notes.forEach( ele => {
            ele.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keypress", event =>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
