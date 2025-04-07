// app.js
const math = require('./math.js');  

const result = math.add(3, 4); 
console.log(result); 
demo.js
function add(a,b){
    return a+b;
}
module.exports.add = add ;
// math.js
function add(a, b) {
    return a + b;  
  }
 module.exports.add = add;

  // index.js
var b = 'https//:mylog.io/log' ;
module.exports.ans = (mesg) =>{
    console.log(b);
    console.log(mesg);
}
// math.js
function add(a, b) {
    return a + b;  // Adds two numbers and returns the result
  }
  
  // Export the add function
  module.exports.add = add;
// newfile.js
// const {ans} = require('./index.js');
const math = require('./demo.js')
// console.log(addition.add(2,4));

// console.log( ans);
// ans('shardul')
const result = math.add(2,5);
console.log(result);


// typecscript code 
type emp = {
    id:number;
    ename:string;
     age:number;   
}
let person1:emp ={
   id: 1,
   ename:'anurag',
   age:12
}
console.log(person1);
let person2:emp ={
   id: 2,
   ename:'raj',
   age:32
}
console.log(person2);
function kgto(weigth:string | number):number{
    if(typeof weigth  ==='number' ){
        return weigth * 2.2;
    }else{
        return parseInt(weigth)*2.2;
    }
}
const ans = kgto(23);
console.log(ans);
const ans = kgto(23);
console.log(ans);


