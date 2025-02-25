//ternary condition
const cartAmount = 20 ;
cartAmount <= 0 ? console.log('you can not proceed to payment page amount is less then RS 0'): console.log('you can pay your cart amount of RS ',cartAmount);
let user = { name: "Meeta", age: 25 };

function updated(newAge) {
    user.age = newAge;
    return user;
}

console.log(updated(26)); 
// Alters the global `user` object
console.log(user.age); 
const accountBalenced = 400 ;
if (accountBalenced<=500){
    console.log('you cant pay balenced is less then 500 rs and  amount is ',accountBalenced)
}else{
    console.log('you can pay balenced is ',accountBalenced);
}






