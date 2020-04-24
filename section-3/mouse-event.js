const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
//clearBtn.addEventListener('click', runEvent);
// Double click
//clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
//clearBtn.addEventListener('mousedown', runEvent);
// Mouse up
//clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse leave
// card.addEventListener('mouseleave', runEvent)
// // Mouse Over
// card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout', runEvent);
// MOuse move
card.addEventListener('mousemove', runEvent);
// Even handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;  
  
  e.preventDefault();  

}