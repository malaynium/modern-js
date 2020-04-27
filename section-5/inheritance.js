// person Constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
} 

// Greeting prototype
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Emmet', 'Loq');

//console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  // inherit from Person constructor
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
  
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// create customer
const customer1 = new Customer('Ebit', 'Lew', '7552525', 'Free');

console.log(customer1);

// overide inheritance prototype
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}  
console.log(customer1.greeting());



