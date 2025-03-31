
let top =[2,4,3,6,7,8];
let  mapp = top.map(function (i){
    i+1
});
console.log(mapp);
const array1 = [1, 4, 9, 16];


const map1 = array1.map(function (x) {
 return x * 2});

console.log(map1);

console.log(0 && 1 && "foo");
console.log("" || "foo" || false);


let x = 5;
if (x > 3) {
    console.log("Yes");
} else {
    console.log("No");
}
let x1 = 3, y = 7;

console.log(x1 > 5 || (y < 10 && x1 > 2))
 let top1 =[2,4,3,6,7,8];
const  res = top1.reduce(function (acc,curr){
  return   acc+curr;
})
console.log(res);
let num = 0;
num >= 0 && console.log("Positive Number");
console.log("Done");
console.log(a=0 && 'dfjdkjfv');
// console.log('jdlsjld' && a="");
console.log('dsadjhs' && 'kdsmdf,s')

const obj ={
    name :[1,4,5,6]
}
console.log(obj)
console.log(obj.name[2])

const promise1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        
        reslove("the promise 1 is done");
    },3000)
})

const promise2 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        try{
              console.lag("fksdjfkv");
        }catch(error){
            console.log('hi i am  error i am in  promise 2 ');
        }
      
        reslove("the promise 2 is done");
    },2000)
})
async function topp(){
    console.log('waiting for promise 1 ');
    const value = await promise1;
    console.log(value);
    console.log('waiting for promise 2 ');
    const value2 = await promise2 ;
    console.log(value2)
}
topp();
