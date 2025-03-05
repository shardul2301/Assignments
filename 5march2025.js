function fun(r){
  for(let i = 0 ; i<r;i++)
  {
    
    let   row = '';
    for (let j = 0 ; j <i;j++){
        row = row + " *";
        
    }
    console.log(row); // console.log(" ")
//   break;/
}
}
fun(10);
console.log("Try programiz.pro");
//let n = 3;
function fun2(r){
  for(let i = 0 ; i<r;i++)
  {
    
    let   row = '';
    for (let j = 0 ; j <r;j++){
        row = row + " *";
        
    }
    console.log(row); // console.log(" ")
//   break;/
}
}
fun2(10);

let n = 10;
for(let row = 1 ; row<=n; row++){
    let str = '';
    let spaces = n - row ;
    for(let j =1 ; j<= spaces;j++){
        str = str + " ";
        
    }
    for(let k = 1 ; k<= n - spaces;k++){
        str = str+"*";
    }
    console.log(str);
}
