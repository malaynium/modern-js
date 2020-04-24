// Set local storage item.
//localStorage.setItem('name', 'john');
//localStorage.setItem('age', '40');

// set session storage item
//sessionStorage.setItem('name', 'fk8');

// remove item from local storage
//localStorage.removeItem('name');

// get item from storange
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// Get item from form, save in local storage
document.querySelector('form').addEventListener('submit',
function(e) {
  // set the input into var
  const task = document.getElementById('task').value; 

  let tasks;

  // if local storage empty put the var into array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // if not empty, change the var into array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // put the new item inside the tasks array
  tasks.push(task);

  // set the input var into local store
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  // put alert when item set into local storage
  alert('Task Saved');

  //console.log(task);
  // pevent default
  e.preventDefault();

});

// Get the value from localstorange and display it.
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(tasks);
})
                                                                                                


