// EVENT LISTENER
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log('Hello World');

//   e.preventDefault();

// });


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
 // console.log('Clicked');
 e.preventDefault();

  let val;

  val = e;

  // Event target element
   val = e.target;
   val = e.target.id;

  val = e.target.className;
  //val = e.target.classList;

  e.target.innerText = 'Hello';

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coordinat event relative to the window
  val = e.clientY;
  val = e.clientX;

  // coordinat event relative to the event
  val = e.offsetY;
  val = e.offsetX;


 console.log(val);
}