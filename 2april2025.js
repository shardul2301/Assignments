

const promise = new Promise((resolve,reject)=>{
    console.log('promise is resloveing');
    4444444
    resolve(7777);
 })
console.log(promise);
// let er = Bigint('234');
// console.log(typeof er);
// console.log(1===1)
let r = 90;
let t =10
//   t+=r;
console.log(t=t+r)
console.log(t**2)
// a = 10
// b = 3
// print(a // b + a % b * 2);
console.log('sdsjk' || 0);
console.log(0 || null || undefined || "Hello" || false);
console.log(5 && 0 && "Hello");
console.log(true == '1');
console.log([] + []);
console.log(null + 5);
console.log("5" - 3);
console.log("5" - 4 + 9);
console.log([] == ![]);
console.log(1 + "1" - 1);
console.log(true + true);
console.log("6" * "2");
console.log(0 == "0");
console.log(typeof NaN);
console.log(!!"false");
console.log(true + false + true);
console.log([] + {} === {} + []);
console.log(+"10" - -"5" + +"2");
console.log({} + []);
console.log(!!"false" == !!"true");
console.log(typeof typeof 1);
console.log((true + false) > 2 + true);
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log("10" - -"10" - "10" + "10");
console.log([] + null + 1);



let a = 129;

if(a>=12){
    console.log("if condition pass")
}
if(a<=23){
    console.log("in the if condition")
}else{
    console.log("condition is false")
}

let q=12;
if(q==0){
    console.log('the value is 0')
}else if(q<10){
    console.log("the number is less then 10")
    
}else if(q>10 && q<13){
    console.log("the number is 12")
    
}else{
    console.log("nothing is executed")
}
let cgpa = 9;
let out = cgpa >8.5 ? 'eligible for test':'not eligible for test' 

console.log(out)


switch (a=12){
    case a<=12:
        console.log('mango');
     case a=12:
        console.log('banana');
    case 'beet':
        console.log('beet');
     case 'apple':
        console.log('apple');   
    default :
    console.log('nothing')
}
console.log(1 + "1" == 11);
console.log(1 + "1" === 11);
console.log(true + false + "1" + 1);
