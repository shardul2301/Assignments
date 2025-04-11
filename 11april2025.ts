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




