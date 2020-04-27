const personPrototypes = {
  greeting: function() {
    return `hello there ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Jane';
mary.age = '23';

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});



mary.getsMarried('JoJo');

console.log(mary.greeting());

console.log(brad);

console.log(brad.greeting());


