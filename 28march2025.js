

const ar = [23,4,5,3,3,24,54,5,3,5];
 let res = ar.push(1,4,8);
console.log(ar);
 
 
 let arrlike = {
     name : 'dkjhad',
     2: 'dgdgdg'
 }
 console.log(arrlike);
 ['for','eac','ert','ret'].forEach((item,index)=>{
     console.log(`the index is ${index} of ${item}`);
     
 });
 const demoarr = [2,3,6,8,4,1,0,9,8,5];
  const indexof3 = demoarr.indexOf(3);
 const notthere = demoarr.indexOf(345);
 const found = demoarr.includes(3);
 const notfound = demoarr.includes(323);
 console.log(indexof3);
 console.log(notthere);
console.log(found) 
 console.log(notfound)
 const last = demoarr.lastIndexOf(8)
 console.log(last);
 
 let users = [
  {id: 3, name: "John"},
  {id: 2, name: "Pete"},
  {id: 1, name: "Mary"},
  {id: 5, name: "John"},
  {id: 40, name: "Pete"},
];

let user = users.find(item => item.id == 1);

console.log(user.name); 


const filte = users.filter((element)=>{
    if(element.id>5){
        console.log(element.name)
    }
    return element.id<5;
})
 
 console.log(filte);
 
 let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item +83);
console.log(lengths)
const numbers = [2,6,8,23,54,65,67,1];
const sorted = numbers.sort();
console.log(sorted)
const prosorted = numbers.sort((a,b)=>a-b);
console.log(prosorted)
const rev = numbers.reverse();
console.log(rev);

const str = 'sanket sahil ramdas rakesh prapti isha rahi'

const parts = str.split(' ');
console.log(parts);
console.log(parts[1]);
for(let names of parts ){
    console.log(`welcome to dashborad : ${names}`)
}
const array2 = ['hi',6,32,'sahil',true]
const joins = array2.join('');
console.log(joins);
 
 
 const array3 = [1,4,6,7];
 const reduce = array3.reduce((acc,curr)=>  acc+curr,0);
console.log(` the sum of array : ${reduce}`);

if(Array.isArray(array3)){
    console.log('this is array ')
}
const obj = {
    balanced :90384
}
console.log(Array.isArray(obj));
console.log(Array.isArray(array3));
