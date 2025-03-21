// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function out(){
    let a1 = 28;
    let p = function (){
        // console.log(a)
        return a1 ;
    }
    return p;
}
const top = out()
console.log(top())
// console.log(a1)
let c =0  ;
function count(){
    // let c =0  ;
    c ++;
    return c ;
}
console.log(count());
console.log(count());

function count1(){
    let p =0  ;
    
    return function ty(){
        p ++;
        // console.log(c);
        return p;
    } ;
   
}

 const top1 = count1();
 console.log(top())
// console.log(count1()());
 console.log(top1())
  console.log(top1())
top1();
top1();
function fun(){
    
}

const apromise = new Promise(function (resolve,reject) {
   setTimeout(()=>{
      console.log("the promise created here  ")
       resolve()
   },2000)
})
apromise.then(function() {
    console.log(" promise consume here done")
})

const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("the promise is reslove ")
        resolve()
    },3000)
})
 promise1.then(function(){
     console.log("finally done")
 })


const promise2 = new Promise(function (resolve,reject){
    let error = false;
    if(!error){
        resolve({username:'shardul',age:22,location:'mumbia'})
    }else{
        reject("error ; something internal issue")
    }
})
promise2.then(function(user){
    console.log(user);
    return username ;
}).then(()=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})

