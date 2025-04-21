

type person ={
    name :string;
    age :number;
    havecar:boolean;
    marriread: boolean;
}

function user1(person1:person):void{
   console.log("the new data is :")
    console.log(user1.name);
    console.log(user1.marriread);

}
console.log(user1({name:'prapti',age:34,havecar:false,marriread:true}));


const arr : Array<number>=[1,4,6,74,746,3,63,9];
console.log(arr);


const  data:number[]=[2,45,3,53,3,5345,35,2,6];
console.log(data);
const  data2:string | number []=['ksjfks','adk','askflsj',45,68,98];
console.log(data2);


let volenteer : [string,number,boolean]=['shardul',56,true];
console.log(volenteer);

enum seattype {
    rightwindow='not available',
    leftwindow=34,
    firstclass,
    buisnessclass
};

const ans = seattype;
console.log(ans);

class user {
    constructor(public name : string ,
    private conatact:number ,
    protected voterid:number,
    location :string){}
}

class subuser extends user{
    citycode : number=6578;
    changecount(){
        // this.conatact
        this.voterid
    }
}

interface takephoto {
    cameramode :string,
    lens:string,
    resolution :string,
    year:number
}
class linknd implements takephoto{
    constructor(
     public  cameramode :string,
       public lens:string,
     public   resolution :string,
     public   year:number,
     public   username:string
    ){}
//  getfile(){
//     return `the name is ${this.lens}`;
//  }
}
const user1 = new linknd('haskhk','hafh','jad',34545,'hFKH');
console.log(user1);
class Box<T> {
    content: T;
    constructor(item: T) {
      this.content = item;
    }
  }
  const numberBox = new Box<number>(123);
  const stringBox = new Box<string>('hello');

