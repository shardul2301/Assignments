
const cart  =["shoes","toy","books"];

const promise = createoder(cart);
//promise.then(function)
console.log(promise);
const cart = ["books","bags","pants","tv"];
createoder(cart)
.then(function (oderid){
    return proceedtopayment(oderid);
})
.then(function (paymentinfo){
    return showsummery(paymentinfo);
})
.then(function (){
    return updatewaalet();
})


