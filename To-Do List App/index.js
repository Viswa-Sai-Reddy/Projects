const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const addTask = document.getElementById("addTask");
const errorCon = document.querySelector(".errorContainer");

addTask.addEventListener("click", (e) => {
  if (inputBox.value === "") {
    errorCon.innerHTML = "";
    let p = document.createElement("p");
    p.setAttribute("id", "error");
    p.innerText = "*Please enter a task";
    errorCon.appendChild(p);
  } else {
    errorCon.innerHTML = "";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("Data");
}
getData();
