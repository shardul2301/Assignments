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


