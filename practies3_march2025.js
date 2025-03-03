 console.log("this is Ecommerse site ");
 const cart =['bags','books','snacks','chess board'];
 console.log('your  cart is ', cart);
 const promise= createoderID(cart);
// console.log(promise)
promise
.then(function (orderid){
    
   return  console.log("your oder id is :",orderid);
  
})
.then(function (oderid){
  const paymentinfo=  proceedtopayment(oderid);
    return paymentinfo;
       
})
.then(function (paymentinfo){
    console.log(paymentinfo);
})
.catch(function (err){
    return  console.log(err.message);
})

function createoderID(cart){
    const prom = new Promise(function (resolve,reject){
        if(validate(cart)){
        const err = new Error("cart is not valid");
        reject(err);
    }
    const oderid = "65776";
    if(oderid){
        resolve(oderid);
       // return oderid;
    } 
    });
   
    return prom;
}

function validate(cart){
    const n = cart.length;
    console.log('the number of products in  cart is :',n)
    if(n>0){
        return false;
    }
    return true;
}

function proceedtopayment(oderid){
    return new Promise(function(resolve,reject){
        resolve('payement done');
       
    })
}

// Output:

// this is Ecommerse site 
// your  cart is  [ 'bags', 'books', 'snacks', 'chess board' ]
// the number of products in  cart is : 4
// your oder id is : 65776
// payement done













