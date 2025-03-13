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
  










