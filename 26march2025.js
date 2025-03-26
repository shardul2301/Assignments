
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
 




let numbers = [1,2,3];
numbers.push(4,6,5,8);
console.log(numbers);
numbers.unshift(0,10);
console.log(numbers)
 
const wer = [2,4,3,6];
console.log(wer.indexOf(4));
console.log(wer.includes(6));
 const obj = [ {
     name :'a',
     property :'ty'
 }]
const res = obj.find(function (element){
     return element.name==='a';
 })
 console.log(res);
 
 const res1 = obj.findIndex(function (element){
     return element.name==='uyt';
 })
 console.log(res1);
 let demoarr = [1,2,3,4];
 demoarr.pop();
 console.log(demoarr);
 demoarr.shift();
 console.log(demoarr)
 let demo = [1,2,3,4];
 console.log(demo);
 demo.splice(2,1)
 console.log(demo)
  demo.splice(2,2)
 console.log(demo)
 
 let first = [1,2,3];
 let last =[4,5,6,7];
 const combined = first.concat(last);
 console.log(combined);
 const slice = combined.slice(3,6);

//  console.log
console.log(slice);

  let firstnumber = [{id:1,name:"tripod"}];
   let lastnumber =[4,5,6,7];
let    combin = firstnumber.concat(lastnumber);
  console.log(combin);
  firstnumber[0].name = 'shardul';
  console.log(combin);
  
  for(let num of lastnumber){
      console.log(num)
  }
  let listofprices = [23,54,76,89,23,12,21,89,67,43]
  const foreach = listofprices.forEach(function(num){
      console.log(`the price of element  is :${num}`);
  })
  
  const  joined = listofprices.join(',');
  console.log(joined);
  
  const string = 'this is my first string for practie'
  const parts = string.split(" ");
  console.log(parts);
 
