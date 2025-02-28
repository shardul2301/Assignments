// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
console.log(9+ +4);
console.log(- -9);
//console.log(--9); error
//console.log( * * 9); error
const p  = 91;
const  modulo = p % 9;//it will give answer of remainder 
console.log(modulo);
let a = 7;
console.log(a**2);
console.log(34);
let t= 78;
let u = 34;
console.log(t+u)
//console.log()
console.log('assignment operators')
let point = 3;
point +=4
console.log('add of  ',point);//point = 7 
point -=2;
console.log('minus of  ',point);//point = 5
point %=3; // remainder is 2
console.log('moduelo of 3 ',point);//point = 2
point /=5;
console.log('divsion of  ',point);
point *=10;
console.log('multiply of  ',point);//point = 4
point **=3;
console.log('exponetial of 3  ',point);
console.log('comparion operator');
let num1 = 23;
let num2 = 45;

console.log('greater than ',num1>num2);//false
console.log('qual to ', num1 == num2 );

console.log(' not qual to ', num1 != num2 );
console.log('less than ',num1>num2);
console.log('greater than or qual to  ',num1>=num2);
console.log('less than or qual to  ',num1<=num2);
console.log('strictly qual to ',num1 ===num2 );//it will check datatype also
console.log('strictly qual to ',num1 !==num2 );

console.log('logical operator');
console.log((3>4)&&(4>3)); //AND FALSE
console.log((5>4)&&(4>3)); 
console.log((5<4)||(4>3)); //OR TRUE
console.log((5<4)||(4<3));
console.log(!(5<4)); // LOGICAL NOT 
console.log(!false);

console.log('bitwise operator');
console.log(2&1);
console.log(2 |1);
console.log('string  operator');
let str1 = 5, str2 = "lo",str3 = 'hi';
console.log(str1 + str2);
console.log(str1 , str2); 
//const result = str1.join('top');
//console.log(result);
let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(" - ");  // Using " - " as the separator
console.log(result);  // Output: "apple - banana - cherry"
const s =  ['r','t'];
const p = ['t','y'];
console.log(s.concat(p));//concat array
console.log(str2.concat(str3)); //concat string
let message = ["JavaScript", "is", "fun."];
console.log(message.join(' '));
console.log('miscellaneous  operator');
console.log(typeof 8 );
console.log(typeof 'string1' );
const functionis = function (){
    console.log('inside function');
}
console.log(typeof functionis );
functionis();

