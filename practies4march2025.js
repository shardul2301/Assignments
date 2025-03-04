// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
//reverse a number without using inbulit mathods and without converting into string 
function fun(num){
    let rev = 0 ;
    while(num>0){
     
    let  rem = num%10;
    rev = rev*10 + rem ;
    num = Math.floor(num/10);
    
    }
    return rev;
}
const result= fun(345);

console.log('reverse number is ',result);


// Output:

// reverse number is  543