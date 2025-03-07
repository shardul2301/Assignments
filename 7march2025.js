// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//reduce method 
console.log("reduce method")
// console.log("Try programiz.pro");
const a = [ 2,6,7,3];
const sum = a.reduce((acc,curr)=>{
    return acc = acc+ curr;
},0);
console.log(sum)

//example of mapping 
console.log("mapping method")
 const mapping = a.map((x)=>( x * 2));
 console.log(mapping);
 
 //filter 
 console.log("filter method")
 const filtervalues=a.filter((x)=>{
     return x>3;
 });
 console.log(filtervalues);
 
 
//  reduce 
const a1 = ["js", "html", "css"];

// Use reduce to calculate the sum of the lengths of the strings
const res = a1.reduce((acc, str) => acc + str.length, 0);

console.log(res);

//output 
// reduce method
// 18
// mapping method
// [ 4, 12, 14, 6 ]
// filter method
// [ 6, 7 ]
// 9
