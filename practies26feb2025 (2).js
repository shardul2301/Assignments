console.log("Hello, World!");

function anagram(string,string2){
    let n =string.length -1;
    let obj = {};
    
    for(let i = 0 ; i<=n;i++){
        if(obj[string[i]]){
            obj[string[i]]++;
        }
        else{
                obj[string[i]]= 1;
            }
        if  (obj[string2[i]]){
            obj[string2[i]]--;
            }
        else{
                obj[string[i]]= 1;
            }
    }
    return obj;
}

const result =anagram('batt','tabt');
console.log(result);