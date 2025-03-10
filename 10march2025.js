// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//basic fat arrow function 
var arrowfun= ()=>{
  return  console.log('hi this is arrow function ') ;
}
arrowfun()
//fat aarow function with one parameter

var b = para=>{ console.log(para)}
b(7);
//fat aarow function with implicit function
var arrowfun1= ()=> 345;
console.log(arrowfun1())



// templet literrals bactick

 const sum = 2+3;
console.log( `hi shardul the sum is ${sum} and we can add more 2 then it become ${sum +2}`)

// default parameter in function 
function dashboard(username="guest"){
    console.log("hi welcome to dashboard",username)
    }
dashboard('shardul');
dashboard();

//destrucring 
const arr=[1,4,3,75,8,9];
let [a,b,c,d,e,f] = arr;
console.log(e)

//spraed 
const vip = [3,6,7,2,5,1,8,9,3,43,7];
const vip2= [...vip];
console.log(vip2)


// for  object 
const obj = {
    name:'shardul',
    age:22
}
let {age} = obj;
console.log(age)


