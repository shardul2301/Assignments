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

// js coding challenges problems
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let obj = {
    name:'shsad'
}
console.log(obj.name)
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
console.log(text)
let str = 'abcd';
console.log(str.indexOf())

function countOccurrences(str, word) {
  //code here
  const count = str.split(word).length - 1;
console.log(count)
  return count;
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);
// q2

function isProductMatch(query, description) {
let result =  description.includes(query);

console.log(result)

}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);



function checkStock(inventory, item) {
    if(inventory[item]<=0) {console.log("Out of stock", item) 
    return ;
        
    }
    return console.log("In stock",item)
    // console.log(inventory.apples==inventory.item && )
    //   let res = Object.values(inventory);
    //   console.log(res)
    // let res = inventory.item;
    // console.log(res)
}


// Function call example
const inventory = { apples: 10, bananas: 0,mango : 0 };
checkStock(inventory, "apples"); // "In stock"
checkStock(inventory, "bananas"); // "Out of stock"
checkStock(inventory, "mango");
// Write a javascript program. Where create a variable email and assign the some email address in it.Then create a variable domain. After that check the email contain the domain.If it finds the domain within the email, it returns the position where domain starts. If not, it returns -1.

function checkGmailDomain(email, domain) {
 //code here
 const position = email.indexOf(domain);
 if(position==-1){
     console.log("email is not valid");
     return;
 }
 return console.log("valid email")
}

const email = "user@example.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);


// Write a program in javascript. Where create a variable phoneNumber .phoneNumber contains the user input, but it has unwanted spaces at the start and end.Than create cleanedPhoneNumber variable which holds the processed, clean phone number without extra spaces..
function cleanPhoneNumber(phoneNumber) {
 //code here
 const res = phoneNumber.trim();
 return res
}

const phoneNumber = "  +1 234 567 890  ";  // User input with leading and trailing spaces
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"




// Example usage
console.log(calculateElectricityBill(250, 5)); // Output: 1250
console.log(calculateElectricityBill(100, 10)); // Output: 1000
console.log(calculateElectricityBill(0, 5)); // Output: 0
 
