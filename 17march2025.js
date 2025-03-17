// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
console.log("falsy vaules in js ")
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
// console.log(Boolean(NAN));
console.log(Boolean(false));



// this bind, call and apply methode
const person  = {
    username:'anuraag',
    age: 22,
    sirname:"patil",
    greeting :function (frames){
        console.log(`hi ${frames}, ${this.username} ${this.sirname} your age is ${this.age}`);
    }
}

 person.greeting('good morning')//line 1 

const person2={
     username:'swaraj',
    age: 21,
    sirname:"patil",
}
const person3={
     username:'harsh',
    age: 24,
    sirname:"mhatre",
}
person.greeting.call(person3,'good evening')//line 2 

person.greeting.call(person2,'good afternoon');//line 3 



person.greeting.call(person3,'good evening')//line 4 
const person4={
     username:'suraj',
    age: 27,
    sirname:"narale",
}

// apply method  we can pass mutiple parameter
const applyarguments = ['good evening'];
person.greeting.apply(person4,applyarguments)

const person5={
     username:'darshan',
    age: 25,
    sirname:"thakare",
}
// bind method this will store the information we acn call wherever we want 
const mybind = person.greeting.bind(person5);
//multiple lines of code 
mybind('good night');

function accountdeatils(greet){
    console.log(`${this.name} ${this.lastname}  your account number is ${this.accountnumber}`)
}

console.log("this is bind method");
const person6={
     name:'pragati',
    age: 25,
    lastname:"thakur",
    accountnumber : 346588231
}
const res = accountdeatils.bind(person6)

res();
