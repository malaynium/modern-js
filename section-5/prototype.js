// Person Constructor
function Person (firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName; 
  this.birthday = new Date(dob);
}

// Person prototype - Get Full Name (prototype can get var value from parent using this)
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Person prototype - Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Person prototype - get married (prototype can get input and update propeties value inside parent)
Person.prototype.getMarried = function(newLastName){
  this.lastName = newLastName;
}


// int
const john = new Person('john', 'doe','December 27 1981');

console.log(john);

// get age
console.log(john.calculateAge());

// get fullname
console.log(john.getFullName());

// new last name if married
john.getMarried('jane');

// get new fullname
console.log(john.getFullName());


