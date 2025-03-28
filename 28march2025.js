

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







// string methods  22 types 

let string = "the gateway of india is in mumbai";
console.log(string)
const length = string.length;
console.log(length);
const includes = string.includes('is');//if not there then it will return the false value 
console.log(includes);
const startwith = string.startsWith('ty');
console.log(startwith);
const endswith = string.endsWith('mumbai');
console.log(endswith);
const indexof = string.indexOf('of');
console.log(indexof);
const substr = string.substr(2,5);//eg it will includes last number of substr also in this 5 up too
console.log(substr);
const att = string.at(4);
console.log(att);
const substring = string.substring(1,4);//not take the negative index 
console.log(substring);
const slice = string.slice(0,-1);
console.log(slice);
// const splice = string.splice(5,2);
// console.log(splice);
let trimstr = '  Here we Are using the trim method so we are happy '
const starttrim = trimstr.trimStart();
console.log(starttrim);
const endtrim = trimstr.trimEnd();
console.log(endtrim);
const trim = trimstr.trim();
console.log(trim);
const uppercase = trimstr.toUpperCase();
console.log(uppercase);
const lowercase = trimstr.toLowerCase();
console.log(lowercase);
const joinedstr = lowercase.concat(uppercase)
console.log(joinedstr)
const str = 'typo';
const reversee = str.split("").reverse().join("");
console.log(reversee);
const replace = string.replace('of','of the whole');
console.log(replace);
const replaceall = trimstr.replaceAll('we','i am ');
console.log(replaceall);

const repeat = str.repeat(3);
console.log(repeat)

console.log(str[0]);
console.log('hiima'[1]);
 const charat = str.charAt(2);
 console.log(charat);
const charcodeat = str.charCodeAt(2);
 console.log(charcodeat);
