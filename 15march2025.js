// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// const arr= [2,3,4,6,9];
// const includes = arr.includes(0);
// console.log(includes);
// const index = arr.findIndex((arr)=>{
//     return arr<=3;
// });
// console.log(includes);
// var counter = (function() {
// 	var count = 0;

// 	return {
// 		increment: function() {
// 			count++;
// 		},
// 		decrement: function() {
// 			count--;
// 		},
// 		getCount: function() {
// 			return count;
// 		}
// 	};
// })();

// // Increment the counter
// counter.increment();
// counter.decrement();
// counter.increment();

// console.log(counter.getCount()); // Output: 3

// // Trying to access the private count variable directly
// console.log(counter.count); // Output: undefined (cannot access private variable)

function fun(){
    const   t = 90;
    console.log(t)
    return ;
}
// fun();
// const t = 67
// console.log(t)
// (function()   {
//     console.log("sdfksjkfa")
//     return ;
// })();
    
//   console.lag(23)  
// conts  gh = 23;
// const number = null;
//     try{
//         console.log(`dfdfgs ${number}`);
//     }catch{
//         console.log("error occur");
//     }
    console.log('i am inner in inside')
    function fun(x){
        setTimeout(function() {
        console.log("hi after 3 sec");
    },3000)
    }
    
    fun();
    
    for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
function createCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
let count = createCounter();
// console.log(count()); // What is the output and why?

function createMathOperation(operator) {
    
  return function(a, b) {
    if(operator=='+'){ return a+b};
    if(operator== '-'){ return a-b}
    
    // perform operation based on `operator`
  };
}
const res = createMathOperation("+");
console.log(res(2,3))
const res1 = createMathOperation("-");
console.log(res1(20,3))

function outer() {
  var a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
var closureFunc = outer();
closureFunc(); // What does this log and why?

function outer() {
  let outerVar = 'I am outside!';
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
const closureFunction = outer();
// closureFunction();
function createCounter() {
  let counter = 0;
  setInterval(function() {
    console.log;
  }, 1000);
}
createCounter();
function outer() {
  let outerVar = 'I am outer!';
  function inner() {
    let innerVar = 'I am inner!';
    function nested() {
      console.log(outerVar, innerVar);
    }
    return nested;
  }
  return inner;
}
const closureFunc = outer()();
closureFunc();
function outer() {
  let counter = 0;
  return () => {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment();
increment();

