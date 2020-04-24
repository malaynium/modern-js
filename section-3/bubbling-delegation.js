// EVENT BUBBLING (From child to Parent)
// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('col');
// });

// EVENT DELGATION (From Parent to target child)
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    // remove the list
    e.target.parentElement.parentElement.remove();
  }
}