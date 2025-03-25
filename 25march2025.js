// array methods
console.log(0.1 + 0.2 === 0.3 );
let array = [1,2,3,4,5,6,7,8,9,0];
const indexOff = array.indexOf(3);
console.log(indexOff);
const at = array.at(3);
console.log(at);
const slice = array.slice(1,3);
console.log(slice);
const splice = array.splice(1,2);
console.log(splice);
console.log(array);
let arr2 =[3,4];
const concat = array.concat(arr2);
console.log(concat);
 arr2.push(34);
 arr2.push(67);
console.log(arr2);
 arr2.pop();
console.log(arr2);
arr2.shift();
console.log(arr2);
// string methods 
let string = 'this is the string for practies   ';
 const trim = string.trim();
console.log(trim);
console.log(string.indexOf('is'));
console.log(string.at(2));
console.log(string.replace('this','hi this'));
 const substr = string.substr(2,4)
console.log(substr);
const slicee = string.slice(3,6);
console.log(slicee);
const splicee = string.substring(3,2);
console.log(splicee);






let string = 'qup';
function reversestr(string){
    let newstr = "";
    for(let i = string.length-1 ; i>=0;i--){
        // console.log(string[i])
        newstr = newstr + string[i]
        
    }
    return newstr;
}
console.log(reversestr(string));

console.log("hello".charAt(5));
console.log('fcdxzv')
console.log("hello"[5]);


let aaray = ['shardul','raj','prapti','sahil','prajakta']
const result = aaray.map((name)=> name = name.length)

console.log(result);
console.log(aaray);


let numbers = [1,2,3,4,5,6,7,8,9,0];
const result2= numbers.filter((num)=> num%2==0 );
console.log(result2)


const sum = numbers.reduce((acc,curr)=>{
  return  acc=acc+curr;
},0)
console.log('the sum is :',sum)

(function() {
    console.log("this is nice")
})();

(function() {
    console.log("Hello! I run immediately!");
})();


function outer(){
    let count = 230;
    return function inner(){
        count++;
        console.log(count);
    }
}
const res = outer();
res()
// console.log(typeof Boolean(NAN))

if (false) console.log("Truth");  
if (0) console.log("Truth");      
if (-0) console.log("Truth");     
if ("") console.log("Truthy");  
if (null) console.log("Truth");
if (undefined) console.log("Truthy"); 
if (NaN) console.log("Truth");    



let arr = [1, 2, 3];
arr.forEach((num) => {
if (num === 2) {
return;
}
console.log(num);
});
