const firstName = 'Hang';
const lastName = 'Jebat';
const age = '36';
const str = 'Hello there my name is wan';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Concat
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and i am ' +  age  + ' years old';

// Escaping quotes ' with backslash \
val = 'That\'s awesome, i can\'t wait';

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1];

// indexof();
val = firstName.indexOf('n');
val = firstName.lastIndexOf('g');

// charAt()
val = firstName.charAt('3');

// get the last char
val = firstName.charAt(firstName.length -1);

// subsring();
val = firstName.substring(0, 2);

// slice()
val = firstName.slice(-2);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('wan', 'brad');

// include() - check word is ni string or not
val = str.includes('Hello');

console.log(val);