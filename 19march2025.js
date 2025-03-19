
// console.log("Try programiz.pro");
// console.log("Start");
// setTimeout(() => console.log("Inside Timeout"), 0);
// console.log("End");
// Output: Start → End → Inside Timeout (because setTimeout is async)

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

function roundNumber(num) {
   // Your code here
   const answer = Math.round(num);
   return answer;
}
console.log(roundNumber(4.3)); // 4
console.log(roundNumber(4.7)); // 5


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
.

function calculateElectricityBill(units, costPerUnit) {
    //Your code here
    return units*costPerUnit;
}



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
 
