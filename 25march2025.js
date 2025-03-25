
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
