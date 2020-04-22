// Type Coversion

let val;

// number to string
val = String(555);
val = String(4+4);

//boolean to string;
val = String(true);

//  Date to string
val = String( new Date()  );

//   Array
val = String([1,2,3,4])

//  toString()
val = (5).toString();
val = (true).toString();

//  String to number
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// length only work on string.
//console.log(val.length);

//  Only work in number
//console.log(val.toFixed(2));

const val1  = String(5);
const val2  = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);




