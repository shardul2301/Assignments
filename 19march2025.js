// JS-Coding-Challenges



// console.log("Try programiz.pro");
// console.log("Start");
// setTimeout(() => console.log("Inside Timeout"), 0);
// console.log("End");
// Output: Start → End → Inside Timeout (because setTimeout is async)
// q1  Question 1: Convert a string to a valid number
// Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.
function convertToNumber(str) {
   // Your code here
  const num = Number(str);
   if(isNaN(num)){
       console.log(num)
       
   }else{
      
    console.log(str)
   }
  
}

convertToNumber("123"); // 123
convertToNumber("abc"); // NaN
// q2
// Write a function that rounds a number to the nearest whole number
function roundNumber(num) {
   // Your code here
   const answer = Math.round(num);
   return answer;
}
console.log(roundNumber(4.3)); // 4
console.log(roundNumber(4.7)); // 5
// q3
// Question 3: Working with Large Numbers: Formatting and Display
// Write a function formatLargeNumber that converts a large number into a user-friendly format (e.g., 1.5K, 3.5M).

// // Example:

// function formatLargeNumber(number) {
//     const answer = number.toFixed();
//     return answer;
// }

// // Example usage
// console.log(formatLargeNumber(1500));  // Output: "1.5K"
// console.log(formatLargeNumber(3500000)); // Output: "3.5M"
// console.log(formatLargeNumber(950)); // Output: "950"

// q4
// Write a function calculateBulkDiscount that calculates the total cost for bulk orders, applying a discount when the quantity exceeds a threshold.
function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    if(quantity>discountThreshold){
        const discountprice = price * (1-discountRate/100)
        return discountprice*quantity
    }else{
        return price*quantity;
    }
    
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
// Write a function generateRandomNumber that generates a random number between a given minimum and maximum value (inclusive)
function generateRandomNumber(min, max) {
   const random = Math.floor(Math.random()*(max-min + 1)+min);
   return random;
}

// Example usage
console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)
// q5
// Write a function convertToBinary that converts a given number into its binary representation as a string.
function convertToBinary(number) {
    //Your code here
    const answer = number.toString(2)
    return answer;
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"
console.log(convertToBinary('rt'));
// Write a function calculateElectricityBill that calculates the total electricity bill based on units consumed and the cost per unit.

function calculateElectricityBill(units, costPerUnit) {
    //Your code here
    return units*costPerUnit;
}

// Example usage
console.log(calculateElectricityBill(250, 5)); // Output: 1250
console.log(calculateElectricityBill(100, 10)); // Output: 1000
console.log(calculateElectricityBill(0, 5)); // Output: 0
 
