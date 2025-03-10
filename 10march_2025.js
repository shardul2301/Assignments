// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// // 3. Logic for anagram program with its time complexity. (for large strings).
// let str1 ='batt';
// let str22 = 'tabt';
// function anagram(str,str2){
//     if(str.length!==str2.length){
//         console.log("this is not anagram")
//         return ;
//     }
//     for (let i = 0 ;i<str.length;i++){
//         for (let j =0 ;j<str2.length;j++){
//             console.log(`string ka ${i} index `,str2[i])
//         //     if(str[i]===str2[j]){ 
//         //         console.log("num is there ",str2[i],str[i])}
//         // }
//         // console.log(str[i])
//     }
// }
// anagram('sg','hg');
console.log("Try programiz.pro");

// 3. Logic for anagram program with its time complexity. (for large strings).
let str1 = 'batt';
let str2 = 'tabt';

function anagram(str, str2) {
    if (str.length !== str2.length) {
        console.log("this is not anagram");
        return;
    }
    
    for (let i = 0; i <= str.length-1; i++) {
        // console.log(str[i])
        for (let j = 0; j <=str2.length-1; j++) {
            // console.log(`string ka ${i} index `,str[i], str2[j]);
           
            if (str[i] === str2[j]) { 
                console.log("num is there commen element ", str[i],str2[j] );
            }
        }
    }
}

anagram('batt', 'tabt');
