// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log(typeof (undefined));
console.log(typeof ([3,5,7]))
console.log(typeof null);

console.log(typeof 'Bigint')
console.log(typeof(67))
let bigInt = 445354645654655555556n
console.log(typeof(bigInt));
console.log(typeof('@'));
console.log(typeof("5"-2));
console.log(typeof("5"+2));
console.log(Number("5") + 3);  
console.log(String(100));      
console.log(Boolean(0));      
console.log(parseInt("10px"));
console.log(Number("10px"));
console.log("5" + 3);    
console.log("5" - 3);  
console.log(5 == "5");  
console.log(true + 1);

let admin ={
    adminname : 'pragati',
    location :'mumbai',
    phonenumber : 98453278,
    address:'near dadar station ',
    position: 'supervisor',
    centerno : 435,
    exam: {
        examname :'UPSC',
        examcenter:'powai',
        slot:1
    }
}
for (let key in admin ){
    // console.log(key)
    console.log(key + ':' + admin[key])
}

console.log(admin.exam.examname)
console.log(admin.exam)

delete admin.centerno
console.log(admin);

