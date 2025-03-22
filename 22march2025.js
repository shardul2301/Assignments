// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log(typeof (undefined));
console.log(typeof ([3,5,7]))
console.log(typeof null);

console.log(typeof 'Bigint')
console.log(typeof(67))
let bigInt = 445354645654655555556n
console.log(typeof(bigInt));
console.log(typeof('@'));
console.log(typeof("5"-2));
console.log(typeof("5"+2));
console.log(Number("5") + 3);  
console.log(String(100));      
console.log(Boolean(0));      
console.log(parseInt("10px"));
console.log(Number("10px"));
console.log("5" + 3);    
console.log("5" - 3);  
console.log(5 == "5");  
console.log(true + 1);

let admin ={
    adminname : 'pragati',
    location :'mumbai',
    phonenumber : 98453278,
    address:'near dadar station ',
    position: 'supervisor',
    centerno : 435,
    exam: {
        examname :'UPSC',
        examcenter:'powai',
        slot:1
    }
}
for (let key in admin ){
    // console.log(key)
    console.log(key + ':' + admin[key])
}

console.log(admin.exam.examname)
console.log(admin.exam)

delete admin.centerno
console.log(admin);

let array =[2,1,5,6,4,9,43,42];
let result = array.filter((num)=>{
    return num%2===0;
    
})
console.log(result);


// JavaScript is awesome
 let string = 'JavaScript is awesome';
 const res = string.slice(13)
 console.log(res);
 
 
 let arr = ['prapti','rahi','pradyna','aditya'];
 for(let values of arr){
     console.log(values)
 }
 
 let reducearr= [10, 20, 30, 40];
 const reduceans= reducearr.reduce((acc,curr)=>{
     return acc+curr;
 });
 console.log( 'the sum of element is :',reduceans);
 //output based 
 console.log(a);
var a = 5;
// console.log(b);
let b = 10;


function  falsyprint(falsy){
    for(let i = 0 ; i<falsy.length;i++){
        // console.log(i)
        // console.log(falsy[i]);
        let point=[];
      if(falsy[i] == 0 ||falsy[i] == '' || falsy[i] == null || falsy[i] == undefined || falsy[i] == false ){
        console.log(falsy[i]);
    
    }
    }
    
}
let falsy = [0,null,undefined,false,'hi',34,'shardul','false'];
const op = falsyprint(falsy);
 
 let name = "Alice";
let age = 25;
console.log(`My name is  ${name}  and I am ${age}  years old.`);
//  output based 
console.log("5" - 3);
console.log("5" + 3);
console.log("5" * "2");
console.log(true + false);


function evenodd(num){
    if(num%2==0){
        return 'even';
    }
    return 'odd';
}
console.log(evenodd(27))
 console.log(evenodd(72))
 
//  output based 
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");


function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
let fn = outer();
fn();


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

 const sum = (a,b)=>{
     return a+b
 }
 console.log('the sum of a , b is :',sum(2,5))
 
 
 
