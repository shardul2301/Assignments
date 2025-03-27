
console.log("Try programiz.pro");
// Input: "Hello World!"
// Output: "!dlroW olleH"
// // 




function reverse(str){
    let rev = "";
    for(let i = str.length-1 ; i>=0;i--){
        rev = rev + str[i];
    }
    console.log(rev);
}
// const reverse = str.split("").reverse().join("");
reverse(str);
// Input: 
// [{name: 'John', age: 25, city: 'New York'}, {name: 'Alice', age: 30, city: 'Paris'}]
// Keys: ['name', 'city']
// Output: 
// [{name: 'John', city: 'New York'}, {name: 'Alice', city: 'Paris'}]

let demo = [{name: 'John', age: 25, city: 'New York'}, {name: 'Alice', age: 30, city: 'Paris'}];
console.log(demo)
let [{name,city}]=demo;
console.log(name);
