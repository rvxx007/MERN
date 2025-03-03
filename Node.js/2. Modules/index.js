// what are Modules in node.js ?
const greet = require('./greet');
const {person1, person2, person3} = require('./people');


greet("Akash");
// Output: Hello Akash
greet("akame");
greet("adam");
console.log("------------------------------------");

greet(person1);
greet(person2);
greet(person3);