// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
function bubblesort(arr){
    for(let i = arr.length;i>0;i--){
        for (let j =0 ;j < i ;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubblesort([2,7,8,9,3]))
