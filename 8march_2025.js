
const str= 'shy shy but';
const res = str.charAt(1);
console.log(res)
 const res2 = str.indexOf('h')
 console.log(res2)
   
 const res3 = str.slice(0,2) // it not consider the last word of string
 console.log(res3)
 
 
 const mystr= '   my Name is iron man   ';
 const res4= mystr.toUpperCase();
 console.log(res4)
 const res5 = mystr.toLowerCase();
 console.log(res5);
 
 const res6 = mystr.trim();//remove extra space
 console.log(res6)
 const res7 = mystr.replace("iron", "spider")
 console.log(res7)
 
 
 let strr = "apple,banana,orange";
let arr = strr.split(",");  // Splits the string at each comma
console.log(arr); 
let repeated = strr.repeat(3)
console.log(repeated)
 let lengthof= strr.length;
 console.log(lengthof);
 
 let startwithstr =  strr.startsWith('apple');//check the  string of string with this word if not then false 
 console.log(startwithstr);
 
 let endwithstr= strr.endsWith('ros');
 console.log(endwithstr);
 
 //ouput
// 1
// sh
//    MY NAME IS IRON MAN   
//    my name is iron man   
// my Name is iron man
//    my Name is spider man   
// [ 'apple', 'banana', 'orange' ]
// apple,banana,orangeapple,banana,orangeapple,banana,orange
// 19
// true
// false
 
 
 
