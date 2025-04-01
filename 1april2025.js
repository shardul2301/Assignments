const top =({ a, b } = { a: 10, b: 20 }) =>console.log(a,b)
top();
(function (){
   return console.log("sacsc");
});

function printname(name){
    console.log(`the name is : ${name}`);
}
for(let i = 2 ;i<3;i++){
    name = 34;
   setTimeout(printname,1000,'shardul'); 
}
name =34;


let num1 = 8;
let num2 =36;
function maxdivisor(num1,num2){
    let divisor = 1;
    for(let i = 0 ;i<=num2;i++){
        if(num1%i==0&&num2%i==0){
            divisor =i ;
        }
    }
    return divisor;
}
console.log(`the answer is : ${maxdivisor(num1,num2)}`);

let string =  'asdfg fddef';
function reversee(string){
let reverse= "";
for(let i = string.length-1; i>=0;i--){
//   console.log(i)
    reverse = reverse+string[i]
}
return reverse;
}

 const res = reversee('shardul hskhfksdhfk');
 console.log(res);

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
     
      return function (d) {
        
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function makeFunc() {
  const name = "code";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
