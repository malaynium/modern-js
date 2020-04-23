// document.getElemetById()

// console.log(document.getElementById('task-title'));

// // Get thing from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').class);

// const taskTitle = document.getElementById('task-title');
// // Change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// //document.getElementById('task-title').style.display = "none";

// // Change Contents
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// QUERY SELECTOR

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// Change the ist style
document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";
document.querySelector('li:last-child').style.color = "red";
document.querySelector('li:nth-child(3)').style.color = "yellow";
document.querySelector('li:nth-child(4)').textContent = 'i will becomene Billionaire this year';



