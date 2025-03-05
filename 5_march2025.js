console.log("Hello, World!");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// let arr = [9,5,2,7];
function sort(array){
    // let newt =[];
    for(let i = 0 ; i<array.length-1;i++){
        
        for(let j = 0 ; j<array.length-1-i;j++){
            
            
          if(array[j]>array[j+1]){
              
               let c=array[j];
                array[j]=array[j+1];
                array[j+1]=c;
                //  let temp = array[j];
                // array[j] = array[j + 1];
                // array[j + 1] = temp;
              
            
            }
           
            
            // console.log("hiiii",j)
            }
    
        //   console.log("hiiii papap",i)
    }
    
  return array;
}
console.log('orignal aaray',[9,2,5,7,1])
console.log(sort([9,2,5,7,1]));


  
//     let c ;
//     let a;
//     let b;
//     let sort= [];
//   for(let i = 0 ; i<arr.length-1;i++){
//       for(let j = i+1 ; j<arr.length-1;j++){
//       a= arr[i];
//       b=arr[j];
//       if(arr[i]>arr[j]){
//           c=a;
//           a=b;
//           b=c;
        
          
//       }
//       console.log(a) ;
//          console.log(b) ;
//       }
//   } 