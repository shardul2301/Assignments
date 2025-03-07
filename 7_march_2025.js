//functions topic
const myObject = {
    outerFunction: function() {
        console.log("This is the outer function.");
          const innerFunction = function() {
            console.log("This is the inner function.");
        };

        
        innerFunction();
    }
};

myObject.outerFunction();

//recursive function example 
function recursuive(n){
    if(n==0){
        return 0 
    }
    console.log(n)
    recursuive(n-1)
}
recursuive(5);

//lambda expresion 
const add = (a,b)=> a+b;
console.log(add(1,4))
