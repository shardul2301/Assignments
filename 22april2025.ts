abstract class takephoto{
  constructor(
    public cameramode :string,
    public filter :string
  ){}

 abstract  getspeia() : void
  getreeltime():number{
    //complex logic
      return 4;
  }
}

class insta extends takephoto{
  constructor(
    public cameramode :string,
    public filter :string,
    public brust :number
){

  super(cameramode,filter)
}
getspeia():void{
  console.log("hi spw")
}

}

const sh = new insta("test1","test2",9);
// sh.getreeltime
const scoer : Array<number> = [];
function idone(val : boolean|number) : boolean | number{
    return val ;

}

function idtwo (val: any):any{
  return val ;
}
function idthree<Type>(val:Type):Type{
  return val ; //in this value it is taking any value but if it 
                 //take number then val should be number and return  also number 
}


idthree(89);
idthree('kdnSK');

function idfour<T>(val:T ):T{
   return val;
}

interface bootel{
  brand:string,
  price:number,
}
idfour<bootel>({'water',343})


function getsearchproduct<T>(product:T[]): T  {
  
  const myindex = 23;
  return product[myindex];

}
 function add<T,Y>(num1:T,num2:Y):number{
  // let addition = num1 +num2;
  return addition;
 }
add(2,3)

const arrowfun = <T,>(price:T[]):T =>{
  console.log("this   generic arrow function ");
return price[3];
}

function another<T,U extends string>(num1:T,num2:U):object{
  // let addition = num1 +num2;
  return {
    num1,
    num2
  };
 }
another(234,'spiderman');


interface database{
  connection : string,
  username:string,
  password:string

}
function data<T,U extends database>(num1:T,num2:U):object{
  
  return {
    num1,
    num2
  };
 }
 data(43,{'connect','hardik','nmp@435'});
