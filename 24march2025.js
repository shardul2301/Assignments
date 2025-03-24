

function doSomething() {
  console.log(this);
}
   
doSomething()
console.log(number)

let number = 10;

console.log(number)
if (0) {
  console.log("This won't run");  
}

if ("") {
  console.log("This won't run"); 
}

 {
     let u = 34;
//   console.log("This won't run"); 
}
console.log(u);

const i=98;

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter1();

Given an array of objects, return a new array containing only the names of users older than 18:

js
Copy
const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 },
];

const res = users.filter((users)=>users.age>18).map((users)=>users.name)
console.log(res)







function first() {
    let a = 10;
    function second() {
        console.log(a);
    }
    return second;
}
let func = first();
func();

console.log('5' - 2);//3
console.log('5' + 2);//52
console.log(5 == '5');//true
console.log(5 === '5');//false

console.log("10"- 15);  


let num = 54;
const re = num.toString()

console.log(  re)
console.log(false == '0');  
console.log(false + 1);  
function up() {
  var x = 1;
} 
up();
console.log(x);
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);

let a= [2,6,5,87];
let tre =  arr.join(a);
console.log(tre)
let arr = [2,4,6,1,7,9];
let str = '012345 shardul  and shardul';
// const res = arr.charAt(2);
const res1 = str.replace('shardul','mane');
// console.log(res)
console.log(res1);
const upper='ewrty';
const uppperres = upper.toUpperCase();
console.log(uppperres);
const lower='WVBBDKU';
const lowercase = lower.toLowerCase();
console.log(lowercase);
const er = str.find('shardul')


let demo = [2,7,9,3,6,1,5,8];
const indexofnum = demo.indexOf(9);
const indexofnum1 = demo.indexOf('a');
console.log(indexofnum);
console.log(indexofnum1);
console.log(demo.lastIndexOf(1))
console.log(demo.includes(1))



