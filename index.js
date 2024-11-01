const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
    if (inputBox.value == '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00D7";
   li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
},false);
inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function saveData() {
    // let tasks = listContainer.innerHTML;
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// console.log('Hello World');