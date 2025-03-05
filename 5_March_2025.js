
//  [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// console.log(y);
function pairs(arr,tar){
  let res = [];
    for(let i = 0 ; i<=arr.length;i++){
        //   let res = [];
        for(let j = 0  ; j<=arr.length;j++){
        
            if(arr[i]+arr[j]===tar){
                 res.push([arr[i], arr[j]]);
                // res.push(arr[i]);
                // res.push(arr[j]);
                
            }
          
        }
         
    }
    return res;
}
console.log(pairs([1,2,3,4],5));
// Output:

// [ [ 1, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 1 ] ]