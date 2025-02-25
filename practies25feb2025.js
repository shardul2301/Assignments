

function a(num) { 
  return console.log(`number is ${num}`);
}
a(90);
const user ={
    username : 'sam',
    age:'23',
    welcomemessage: function (){
        return `${this.username},welcome to dashboard`;
        
    }
}
console.log(user.welcomemessage());
user.username = 'shshs';

console.log(user.welcomemessage());
console.log(user.age);

//immdiate invoke function 
(function nimap(username){
    console.log(`${username} welcome to dashboard of nimap`);
})('shardul');//it is also called named iife 

((username) => {
    console.log(`${username} welcome to dashboard of nimap`);
})('raj');//without named iife 
  //anonoous function 
  const add = function (){
      return console.log('anonomous function is here');
  }
  add();
  function pure(num1,num2){
    return  console.log('this is pure function');
  }

const arrowfunction = ()=> console.log('this is arrrow function ');
// we does not written return satement because there is only  one line 
// also we does not write curly braceses
setTimeout(function (){
    for(let i = 0 ; i<=3;i++){
        console.log('call back function',i);
    }
},1000);

// Pure functions return consistent results for identical inputs.
// They do not modify external states or depend on mutable data.
// Often used with immutable data structures to ensure reliability.
// Their independence from external states makes them highly reusable.
function addtwo(vaule1, vaule2) {
    return vaule1 + vaule2;
}
console.log(add(9, 3)); 
console.log(add(9, 3));













