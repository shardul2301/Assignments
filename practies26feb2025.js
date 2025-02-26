console.log("Hello, World!");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Comlet 

var count = 1;
 
 // hoisting concept quetions  in depth 
  function printcount(){
    //var count = 0;
     console.log(count);
  if (count === 0) {
    
    console.log('inside');
    console.log(count);  
  }
}
printcount();
function fun(){
    console.log(count);//
    if(count===1){console.log('side');}
}
fun();
{
    var t=9;
    
}
console.log(t);
//Output:

// Hello, World!
// 1
// 1
// side
// 9
