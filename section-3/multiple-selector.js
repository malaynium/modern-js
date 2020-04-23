// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello Billionaire';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// //console.log(lis);
// //console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'i am a bilionaire';

// // Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll (return in node list. Did not need to convert to array)
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}:Hello`;
});

console.log(items);

// make the list 2 color
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'red';
}

