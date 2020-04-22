// FUNCTION DECLARATIONS

function greet(firstName = 'Hang', lastName = 'Jebat'){
  // old es5 ways
  // if (typeof firstName === 'undefined'){firstName = 'Hang'};
  // if (typeof lastName === 'undefined'){lastName = 'Jebat'};
  // es6
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet('Hang', 'Cromok'));

// FUNCTION EXPRESSIONS (PUT FUNCTION INISDE A VARIABLE)
const square = function(x = 3){
  return x*x;
};

//console.log(square(6));


// IMMIDIATLEY INVOKEABLE FUNCTION EXPRESSIONS - IIFEs

// without param
(function () {
  console.log('IIFE Ran...'); 
})();

// with param
(function (name) {
  console.log(`Hi ${name}`);
})('Daredevil');


// PROPERTY METHODS. (WHEN A FUNCTION PUT ON OBJECT, ITS CALL METHOD)
const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// add new function in object
todo.delete = function(){
  console.log('Delete this');
}

todo.add();
todo.edit(22);
todo.delete();

