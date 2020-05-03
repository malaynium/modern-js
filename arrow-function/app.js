// const sayHello = function(){
//   console.log('hello');
// } 

// arrow functio 1
// const sayHello = () => {
//   console.log('hello');
// }

// one line function not need braces
//const sayHello = () => console.log('hello');

// one line return
// const sayHello = () => 'hello';

// return object
//const sayHello = () => ({msg:'hello'});

// single params dont need parenthese
//const sayHello = name => console.log(`hello ${name}`);

// multiple params need parentese
//const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

// sayHello('John', 'Wick');

// return array
const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
