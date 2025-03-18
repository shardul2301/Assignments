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

console.log(Building) //so in this out put number of pepoles are update bucause of object are not passby vaule it pass by reference
 
 
 
 
