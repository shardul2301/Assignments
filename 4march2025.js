let squearroot = 30.25;
for(let i =0 ;i<squearroot;i++){
if(squearroot==i*i) console.log('the number is ',i);

if(squearroot<=i*i) {
    let pp= squearroot/i;
    console.log('the number is ',pp);
}}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero"); // Manually throwing an error
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message); // Catch and display the error
    return null; // Handle the error by returning null
  } finally {
    console.log("Division attempt completed.");
  }
}

console.log(divide(10, 0)); // Error: Cannot divide by zero
console.log(divide(10, 2)); // 5
 
 let day = 1;
 
 switch(day){
     case 1 : console.log("hi monday"); break;
     case 2 : console.log("hi tuesday"); break;
     case 3 : console.log("hi wendesday"); break;
     default: console.log("thenga");
 }
if (day == 1){
    console.log("inside of if loop ");
}else if(day == 2){
     console.log("inside of else if loop ");
    
}else{
     console.log("inside of else loop ");
}
console.log('start');
setTimeout(function (){
    
    console.log('hi after 3 sec');
},3000);

console.log('end')
// WAP to find missing elements from the array?

let n = 6;
 let actualsum=  (n*n+n) / 2;
 let currsum=0;
function fun(arr){
    let num;
      if(currsum!=actualsum){
        num = actualsum-currsum;
    }
for(let i = 0 ; i<=arr.length-1;i++){
  // let num;
    currsum= currsum+arr[i];
    
    
}
 num = actualsum-currsum;
return num;
}
// console.log(num)
const result = fun([1,2,3,5,6]);
console.log('missing number from aaray is ',result);