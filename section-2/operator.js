// if(something){
//   do something
// } else {
//   do something else
// } 

const id = 100;

// EQUAL TO
// if ( id == 100 ){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if ( id != 100){
//   console.log('CORRECT');  
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE <-- ALWAYS USE THIS
// if (id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE <-- ALWAYS USE THIS
// if (id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // TEST IF VAR IS UNDEFINED (EMPTY)
// if(typeof id !== 'undefined') {
//   console.log(`The ID IS ${id}`)
// } else {
//   console.log('No ID');
//}


// GREATER OR LESS THEN
// if (id >= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE
// const color = 'red';

// if (color === 'red'){
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATOR
const name = 'Wan';
const age = '39';

// AND &&
// if (age > 0 && age < 12){
//   console.log(`${name} is a child`);
// } else if ( age >= 13 && age <= 19 ) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// OR ||
// if (age < 16 || age > 65){
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is register for the race`);
// }

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

