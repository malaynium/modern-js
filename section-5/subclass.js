class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
  }

  // Greeting method
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // get var from parent class
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  // static function exp
  static getMembershipCost(){
    return 500;
  }
}


const john = new Customer('John', 'Wick', '7552525', 'premium');

console.log(john);

console.log(john.greeting());

console.log(Customer.getMembershipCost());

