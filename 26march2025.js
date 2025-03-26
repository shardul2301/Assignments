
let num1 = 10;
let num2 = 20 ;
let result = num1%num2;
console.log(result);//modulo means the remainder oof division when we completed the 
const exponetail = num1**num2;
console.log(exponetail);
const postadd = num1++;
console.log(num1)
const preadd = ++num1;
console.log(postadd);
console.log(preadd);

 num1 += 2;
 console.log(num1);
 num2 %= 3 ;//num2 = num2 %3
 console.log(num2);//answer is 1 
 num2 **=2; //num2 = num2 **2;
 console.log(num2)
 
 console.log(1=='1');
 console.log(1==='1');
 console.log(23!=='23')
 console.log('apple'!='mango');
 
 console.log(0==false);
 console.log(2 && 5 ); 
  console.log(2 || 5 );
 console.log(!true);
 console.log(678 >567);
  console.log(678 <= 567);
  let number1 = 265;
  let number2=876;
  const res = number2>=number1 && number2<number1;
  console.log(res);
//  console.log( number2>=number1 && number2<number1)
let drivinglincence=true;
let age = 14;
let eligibletodrive = age>=18 && drivinglincence ==true;
if(eligibletodrive){
    console.log('you drive the car')
}else {console.log('you can not drive the car')}
//unary operator
const  a = '54889';
const unary = +a;
console.log(unary);
 console.log( typeof unary);
 let points = 102 ;
 let typeoflevel = points>100 ? 'gold level ' : 'silver level';
 console.log(typeoflevel);
 
 let income =  true ;
 let creditscoer = true ;
 let eligibalforloan = income && creditscoer;
 console.log('you are eligible:',eligibalforloan);
 let application = !eligibalforloan;
 console.log('applocation refused',application)
 console.log( Boolean(NaN))
 
 let usercolour = 'red';
 let defaultcolour = 'blue';
 let currentcolour = usercolour||defaultcolour;
 console.log(currentcolour);
 
 
 const output = false || true ;
 console.log(output);
  const output1 = false || 1 ;
 console.log(output1);
  const output3 = false || 'shardul' ;
 console.log(output3); 
  const output4 = false || 2 || 'shardul' ;//in logical OR operator  IF we found the truthy vaule then it will return that 
 console.log(output4); 
 
