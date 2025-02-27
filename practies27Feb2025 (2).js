 
 
 let str='tyYWWSDF';
 console.log(str.toLowerCase());
 const object1= {
     couerse :'java',
     name:'sam',
    fun: function enrollment(){
         console.log('hi from object');
     }
 }

console.log(object1.name);

const ecom = {
    itemname:'laptop',
    amount :2500000,
    discount : 23,
    itemcode:1453
}



const football = 'newpr';
//18. Sum of squares of first n prime numbers
 let number = 5;
 function primesuqear(number){
     for(let i = 2; i<=number;i++){
        
         if(number%2!=0){
             console.log('hi',i);
         }
     }
     
 }
primesuqear(15);

  function getPrimeNumber(num){
    //   console.log(Math.sqrt(num));
      for(let i = 2 ; i<=num/2; i++){
         if(num % i == 0){
            return false;
         }
      }
      return num;

 }


// Function to call the displayMessage function 'n' times
function callFunctionNTimes(n) {
    for (let i = 1; i <= n; i++) {
        getPrimeNumber();
    }
}

// Call the function 5 times (for example)
callFunctionNTimes(50);




 console.log(getPrimeNumber(4))
 console.log(getPrimeNumber(23))
 console.log(getPrimeNumber(2))
function printPrimeNumbers(n) {
    // Loop through all numbers from 2 to n (1 is not a prime number)
    for (let num = 2; num <= n; num++) {
        let isPrime = true; // Assume the number is prime

        // Check divisibility by any number from 2 to sqrt(num)
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; // num is divisible by i, so it's not prime
                break; // No need to check further divisibility
            }
        }

        // If num is prime, print it
        if (isPrime) {
            console.log(num);
        }
    }
}

// Example usage: Print prime numbers from 1 to 50
printPrimeNumbers(5);


// Output:

// tyywwsdf
// sam
// hi 2
// hi 3
// hi 4
// hi 5
// hi 6
// hi 7
// hi 8
// hi 9
// hi 10
// hi 11
// hi 12
// hi 13
// hi 14
// hi 15
// false
// 23
// 2
// 2
// 3
// 5
























