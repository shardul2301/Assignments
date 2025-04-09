const fs = require('fs');
 const res = fs.writeFileSync('student.txt','shardul,prathum,anuraag'); //creating the file using this fs 
 console.log(res)


function add(a,b){
    console.log('this is module of add');
    return a+b;
  }
  module.exports  = add;

const addes =  require('./modulesfs');

const res = addes(2,4);
console.log(res)
 const read = fs.readFileSync('student.txt','utf-8');

 console.log(read);
 fs.appendFileSync('student.txt','  ,prapti'); // it use for adding the vaulww into the file 
 console.log(fs.readFileSync('student.txt','utf-8'));
fs.unlinkSync('student.txt');//this will file get vanished 
