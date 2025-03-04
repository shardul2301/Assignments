
let str2 = 'HDHDH'
let res= str2.toLowerCase();
console.log(res);

function fun(str){
    let upper = 0;
         let lower= 0;
    for(let i = 0 ;  i<=str.length-1;i++){
        if(str[i]==" "){
            continue;
        }
        // console.log(str[i]);
         
        if(str[i]==str[i].toUpperCase()){
            // console.log(str[i])
            upper++;
        }else{
            lower++
        }
    }
    return {upper,lower};
}
 console.log('Hello world');
 console.log(fun('Hello world'))
 console.log('SHARDUL Mane');
 console.log(fun('SHARDUL Mane'))
 
// Output:

// hdhdh
// Hello world
// { upper: 1, lower: 9 }
// SHARDUL Mane
// { upper: 8, lower: 3 }