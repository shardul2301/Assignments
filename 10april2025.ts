// q1  Given the data below, define a type alias for representing users.
let users = [
{
name: 'John Smith',
age: 30,
occupation: 'Software engineer'
},
{
name: 'Kate Müller',
age: 28
}
];
// console.log(users);
type emp ={
    name :string ;
    age : number ;
    occupation?: string ;

}
let person1:emp ={
    name : 'John Smith',
    age: 30,
    occupation: 'Software engineer'
}
let person2:emp ={
    name : 'Kate Müller',
    age: 28
}
console.log(`the person1 name is ${person1.name} and the age is ${person1.age}`);
console.log(`the person2 name is ${person2.name} and the age is ${person2.age}`);


// q2   Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type pet ={
    name : string ;
    species : string;
    fly?: boolean;
    swim? : boolean;
}

let birds : pet ={
     name : 'croww' ,
    species : 'non reptiles',
    fly: true
    
} 
console.log(birds);


let fish : pet ={
     name : 'shark' ,
    species : 'lives in sea',
    fly: false,
    swim:true
} 
console.log(fish);

// oops in typescript
class Account {
    id:number ;
    owner : string;
    balance: number;
accounttype : string;

constructor(id:number , owner : string ,balance: number ,accounttype : string){
    this.id= id ;
     this.owner=owner;
     this.balance = balance;
     this.accounttype = accounttype;
}
deposite(amount:number):void{
    if(amount<=0)
        console.log('invalid balance');
     this.balance += amount;
}

}
