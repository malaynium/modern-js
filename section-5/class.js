class Person {
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName; 
    this.birthday = new Date(dob);
  }

  // Greeting method
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  // Calculate age method
  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // getMarried method
  getMarried(newLastName){
    this.lastName = newLastName;
  }

  // static function (noneed to instance to use)
  static addNumbers(x,y){
    return x + y;
  }

}

const mary = new Person('mary', 'jane', '4-11-1988');

console.log(mary.calculateAge());

mary.getMarried('Wan');

console.log(mary.greeting());

// static function exp:
console.log(Person.addNumbers(1,2));