
console.log("Try programiz.pro");
const arr = [4,[32,56,89,[2,4,56],34,78,09,54]];
const ans = arr.flat(Infinity);
console.log(ans)

function secondlarge(){
    let first = - Infinity;
    let second = -Infinity;
    let arr = [2,5,6,7,8];
    console.log(arr);
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]>first){
            second = first;
            first = arr[i];
        }else if(arr[i]>second && first !== arr[i]){
            second = arr[i];
        }
    }
    return (second===-Infinity ? 'no second large element': second);
}
console.log(secondlarge());

 let arr = [2,5,6,7,8];
 for(let key in arr){
     console.log(`${key} : ${arr[key]}`);
 }
 
 let object={
     name :'hshshs',
     age:"sdjkasjdja",
     price:3465
 }
for(let keys in  object ){
    console.log(`${keys} : ${object[keys]}`)
}
let array=[2,4,7,8,3];
for(let values of array){
    console.log(` the vaules of array is ${values}`);
}
// let obj={
//     name : 'skybag',
//     product:'bag',
//     colour : 'red'
// }
// for(let value of obj){
//     console.log(` the vaules of obj is ${value}`);
// }

