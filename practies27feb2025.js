console.log("Hello, World!");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// process.nextTick(() => console.log('nextTick'));
// queueMicrotask(() => console.log('microtask'));
// setImmediate(() => console.log('setImmediate'));
// setTimeout(() => console.log('setTimeout'), );

// console.log('start');
// setTimeout(() => {
//   console.log('This runs after 0 milliseconds');
// });
// 
    
// }
// //const res = 90;
// console.log(this.obj); // output?
// function se(){
//     let top='ty';
//     console.log('ty464565',top)
// }
// se();

function processPerson(callback) {
  // Define an object inside the function
  const person = {
    name: 'Bob',
    age: 25
  };

  // Pass the object to the callback
  callback(person);
}

// Define a callback function to process the object
function printPerson(person) {
  console.log('Name: ' + person.name);
  console.log('Age: ' + person.age);
}

// Call processPerson and pass printPerson as the callback
processPerson(printPerson);

//logical output based quetions
let a = 10;
let b = 500;
let u = 2;
let p=10;
console.log( u+  u*u/p); 
let result =  2 +2*20 / 10;
console.log(result);
// Output: Output:

// Hello, World!
// Name: Bob
// Age: 25
// 2.4
// 6


















