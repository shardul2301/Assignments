// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
const prices = [2,4,5,8,2,90];
prices.forEach((prices,i,arr)=>{
    return arr[i]=prices+10;
})
console.log(prices)
const  wow = [3,5,0]
// wow.forEach(myfun());
function myfun(){
  return  sum =  wow *2;
}
console.log(wow)
const numbers = [65, 44, 12, 4,4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers)
  numbers.push(5);
 console.log(numbers)
 numbers.pop();
 console.log(numbers)
//  numbers.splice(1,3);
 
 numbers.push(56)
console.log(numbers);
 const slicemeth = numbers.slice(0,3)

console.log(slicemeth);
//  numbers.splice(1,3);
console.log(numbers)
 const indexof = numbers.indexOf(12);
 console.log(indexof)
 const at = numbers.at(2);
 console.log(at);
  const newpoint = numbers.forEach((element,i)=>{
     console.log( `index number is ${i}:`,element);
  })
  const reverse = numbers.reverse()
  console.log('this reverse aaray ',reverse)
  const shift = numbers.shift();
  console.log("the shift use ",shift);
  console.log('original aaray also affect ',numbers);
  const unshift = numbers.unshift(8);
//   console.log(unshift);
  console.log('original aaray after unshift  also affect ',numbers);
  
  
  numbers.sort((a,b)=> a-b);
  console.log('original aaray :',numbers);
  const arr = [1,4,7,8];
   const concatmethod = numbers.concat(arr);
  console.log(concatmethod)
  concatmethod.pop();
  console.log(concatmethod)
 delete arr[1];
  console.log(arr)
  const spliced = arr.toSpliced(0,1)
  console.log(spliced)
  const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced1 = months.toSpliced(0, 2);
console.log(spliced1)
// months.findindex()
  console.log(months)
  const ages = [3, 10, 18, 20];
const index = ages.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
}
console.log(index); 
  
///string methodes 


// // const dates = ["2023-4-2","2022-6-3","2025-9-1"];
// // const formatdate = dates.map(formatting())
// // // console.log()

// // function formatting(){
// //     const parts = dates.split("-");
// //   return parts ;
// // }

// const  carpet ='shardul=mane'
// // const fit = carpet.map(fun())

// function fun(){
//     const splititems = carpet.split("=");
//     return `${splititems[0]} the sir name is ${splititems[1]}`;
// }
// // const splititems = carpet.split("=");
// // console.log(splititems);
// console.log(fun())
let string  = 'jackpot';
const length = string.length;
console.log(length);
// Extracting String Characters
 const charat =string.charAt(0);
 console.log(charat)
 
 const charat1 =string.at(5);
 console.log(charat1)
 const charat2 =string.charCodeAt(4);
 console.log(charat2)
 let characterof2 = string[2];
 console.log(characterof2)
  const newstr = string.slice(0,3);
 console.log("updated str with slice",newstr);
 const fruites = "banana,oarange,chiku,gava,strobery";
 const res = fruites.substring(1,6)
console.log("the use of sub string ",res);

const toupperlower = "harry POTTER";
const up = toupperlower.toUpperCase();
console.log(up)
const low = toupperlower.toLowerCase();
console.log(low);
 const concatmeth = up.concat(low);
 console.log(concatmeth);
 const word = 'skddskd + shdashkd   ';
  const res43 = word.trim();
  console.log(res43)
  const splitword = word.split("+")
  console.log(splitword);
  let text = "Hello world!";
let result = text.repeat(2);
console.log(result);
let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "Schools");
console.log(newText);

//rest spread const person1 = {
    name : 'joe root',
    role: 'rigth hand batsman ',
    team:'england'
}


const criketer2 = {
    name : 'virat koli',
    role: 'rigth hand batsman ',
    
}
const {name,role,team} = person1 ;
console.log(name);
console.log(role);
console.log(team);
const {name,role,team ="india"} = criketer2 ;
console.log(team)

const arr = [ 1,4,6,7,9,34,65,0];
const result = Math.max(...arr);
const result1 = Math.min(...arr);
console.log(result)
console.log(result1)
function foodstore(...food){
    console.log(...food);
    
}
let food1 = 'juice';
let food2 = 'samosa';
let food3 = 'dhokla';
const res = foodstore(food1,food2);








