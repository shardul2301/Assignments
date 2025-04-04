// let array :number[] =[1,3,4,6,'4'];
let array :number[] =[1,3,4,6,4];
console.log(array);
const small = 's';
const medium = 'l';
const large = 'xl';



// enum size{small= 1,medium,large};

const enum size{small= 1,medium,large};

let mysize:size = size.medium;
console.log(mysize);
// function calculateTax(income :number ):number {

//     return income;

// }
// console.log(calculateTax(23));
function calculateTax(income : number,taxyear?:number) :number  {

    if(income<20000 && (taxyear =2022)){
        return income *20;
    }
        

    return income *10;
//by default the function will return the undefined value and undefine is not a number 
}
const tax = calculateTax(180000,2018);
console.log(tax);



function bill(units :number  , perunit=100 ):number{
    let bill : number ;
    if(units<10 ){
        console.log('the price is ',perunit)
       
    }else{
        bill = units*perunit;
        console.log(bill);
        return bill;


    }
 return 0;

}
bill(2);
// let obj = {id:23};
// obj.name = 'jskfhwe';//this  is proper valid code in js but not in typecript
 let emp :{
   readonly  id :number ,
    name : string//by using the ? we can set option the property but that is not good practies 
 }= {id : 21,name :'shardul'};// also can set an '' empty string or default one 
console.log(emp);
// emp.id = 45; redelcarredd iis done but readonly mode will not allowed us 
// console.log(emp);
let user:[number ,string,boolean] = [1,'shardul',true];
console.log(user[1]);
console.log(user);
 
