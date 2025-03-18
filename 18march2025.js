// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
console.log([] + {});  
console.log({} + []);  
fun()//hoisting in function 
// trail()
function fun(){
    console.log("nimap")
}
let trail = function (){
    console.log("nimap")
}
 
  console.log("we are using for...in loop ")
 let aaray = [1,4,6,3];
 for(let index in aaray){
     if(index>1){
         console.log(index)
     }
 }
 console.log("we are using for...of loop ")
 for(let values of aaray){
     console.log(values)
 }
 console.log("do while loop")
 let exp = 0;
 do{
     exp++;
     console.log(exp)
 }while(exp==10)
 
 
 let string = 'shardul';
 const res = string.substr(0,2);
 console.log(res)
//  passbyvaule vs passby refernece 
 let a = 23 ;
 let b = 24 ;
 let c = a;
 console.log(c);
 let d = [1,5,7,0,2];
 let e = d ;
 e.push(234);
 console.log("the value of e :",e)
 console.log("the value of d :",d)//it will also affect the vaule of d 
 const Building = {
     floors : 23,
     pepoles:4587,
     lift :7
     }
     
function updated(tower){
    tower.pepoles = 5034
}

const updatednumber = updated(Building);


console.log("implicit and explicit type conversions");
// q1
let a = 5.7;
let b = parseInt(a);
console.log(b);
// q2
let x = String(123);
console.log(typeof x);
// q3
console.log(parseFloat("3.14") + 2);
// q4
let num = Number("123abc");
console.log(num);
// q5
let x1 = 10;
let y = "20";
let z = String(x1) + y;
console.log(z);
// q6
console.log(Number(true), Number(false));
// q7
console.log(Boolean("false"));
// q8
let arr = [1, 2, 3];
console.log(String(arr));
// q9
console.log(parseInt(3.99));
// q10
let mySet = new Set([1, 2, 3]);
let myArray = Array.from(mySet);
console.log(myArray);
// q11
console.log(+"10" + 5);
// q12
let x2 = "5";
let y1 = 2;
console.log(x2 * y1);

// q13
console.log(Number(null));
// q14
console.log(Boolean([]));
// q15
console.log(String(undefined), typeof String(undefined));
// q16
console.log("5" - - "2");
// q17
console.log(Number([]), Number({}));
// q18
console.log(true + false + "3");
// q19
console.log(parseInt("12px"), parseFloat("12.5px"));
// q20
let a1 = "1";
let b1 = 2;
console.log(a1 + b1, a1 - b1);


console.log(Building) //so in this out put number of pepoles are update bucause of object are not passby vaule it pass by reference
 
 
 
 
