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
