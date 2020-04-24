// Create Element
const li = document.createElement('li');

// Add id
li.id = 'new-item';

// Add  Attribute
li.setAttribute('title', 'New Item');

// Create text node and append 
li.appendChild(document.createTextNode('Hello Billionaire'));

// Create new link element
const link = document.createElement('a');
// add Classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';  

// Appeng ink inti li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);