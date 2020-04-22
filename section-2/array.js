// create some arrays
const numbers = [43,55,66,1,22,15,100,9];
const numbers2 = new Array(22,67,43,56);
const numbers3 = [1,2,3,4,5,6,7,8,9];
const company = ['Facebook', 'Amazon', 'Netflix', 'Google'];
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 23;
// // Find index of value
// val = numbers.indexOf(23);


// // Mutating Arrays
// // Add on to end
// numbers.push(27);
// // Add on to front
// numbers.unshift(72);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// // Splice values
// numbers2.splice(1,1);
// numbers2[5] = 200;
// numbers2[6] = 10;
// numbers2[3] = 1,
// numbers2[4] = 4;
// numbers2.splice(1,4);
// numbers3.splice(1,3);

// // reverse array
// numbers3.reverse();

// // Concat Array
// val = numbers2.concat(numbers3);
 
// Sorting arrays
// val = company.sort();
// val = numbers.sort();

// // Use the compare function to sort numbers corecctly
// val = numbers.sort(function(x, y){
//    return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//   return y - x;
// });

// Find
function under50(num){
  return num < 50;
}

function over50(num){
  return num > 50;
}

val = numbers.find(under50);

val = numbers.find(over50);

//console.log(numbers);
console.log(val);
