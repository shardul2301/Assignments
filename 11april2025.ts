console.log('jdldsjlf');

class Account {
   readonly id:number ;
    owner : string;
  private  _balance: number;
accounttype? : string;

constructor(id:number , owner : string ,balance: number ,accounttype : string){
    this.id= id ;
     this.owner=owner;
     this._balance = balance;
     this.accounttype = accounttype;
}
deposite(amount:number):void{
    if(amount<=0)
        console.log('invalid balance');
     this._balance += amount;
}

getbalance():number{
    return this._balance;
}
 private taxcalculator(){
    console.log('xyz methods')
}

}
let  account = new Account(1,'ironman',0,'saving');
account.deposite(100);
console.log(`the balance is : ${account.getbalance()}`);
console.log(`the type of account is : ${account.accounttype}`);
console.log(account);


// parameters and private readonly and optional 
class car {

constructor( 
public readonly id:number ,
public owner : string ,
private _price: number , 
public model : string){
    
}
getcarlone(loanamount:number):number{
    
    loanamount= this._price + loanamount;
    return loanamount;
}

}
let ola = new car(1,'spiderman',67000,'hatchbacks');
const loan = ola.getcarlone(10000);
console.log(`the amount of loan  + with car amount then  total is  ${loan}`);

let supercar = new car(2,'iron man ',500,'superfast');
const loanofsupercar = supercar.getcarlone(1);
console.log(`the amount of loan  + with car amount then  total is  ${loanofsupercar}`);
//index signature
class seatassgiment {
    [seatnum : string ]:string;
}
let seat = new seatassgiment();
seat.A1='spiderman';
seat.A2 = 'loki';
seat.S23 = 'danish';
console.log(seat);
// Classes, Interfaces and Object-oriented Programming exercises
// Define a class called Logger that takes the name of a file in its constructor and provides
// a method for writing messages to that file. Don’t worry about the actual file I/O
// operations. Just define the class with the right members.

class logger {
    constructor(public filename:string);

   
 }

// Given the Person class below, create a getter for getting the full name of a person
class Person {
constructor(public firstName: string, public lastName: string) {}

get fullname(){
   return this.firstName + " "+ this.lastName;

}
set fullname(val:string){
    this.firstName + " "+ this.lastName;
}
}

// // Create a new class called Employee that extends Person and adds a new property
// // called salary

class Employee {
    constructor(public salary :number){

    }

}
class person extends Employee {
    constructor( public name : string,private readonly salarymonth : number,salary:number){
        super(salary);
    }
}

let person1 = new person('spiderman',2000,24000);
console.log(person1);

person1.name = 'alice';

// // +Given the data below, define an interface for representing employees:
interface employee  {
name: 'John Smith',
salary: 50_000,
address: Adress
}

interface Adress{
 street: 'Flinders st',
city: 'Melbourne',
zipCode: 3144

}
function  echo<T extends number | string >(value:T):T{


    return  value;
}
// echo(true);



// Generics function  example 
// proper way way to write 
function add<T,E>(value:T,value2:E):[T,E]{
   return [value,value2];

}
const val:[number,number] = add<number,number>(32,2);
console.log(val);
const ans = val[0]+val[1]
console.log(ans)

// not proper way to write 
function addValues<T extends number | string>(a: T, b: T): T {
  return (a + b) as T;
}

// Using with numbers
const numResult = addValues<number>(10, 20);
console.log("Number Sum:", numResult); // Output: 30

// Using with strings
const strResult = addValues<string>("Hello, ", "World!");
console.log("String Join:", strResult); // Output: Hello, World!







