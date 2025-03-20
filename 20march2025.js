
console.log("Hello, World!");

// destrucring aaray
const destrucring = ['shardul',67,54];
let username =destrucring[0] 
console.log(username);
let [a,b,c]= destrucring;
console.log(a);
console.log(b);
console.log(c);
// const emty = [ , , , , , ,7 , , , , ]
// console.log(emty)
function user(){
    return ['prapti',18,'delhi'];
}
let [name,age,city]=user();
console.log(name);
console.log(city);
// Destructuring Object 
const car = {
    carname : ' Tata neno',
    colour: 'red',
    price: 230000
    
    }
const {carname,colour,price} = car;
console.log(`the car name is ${carname}  and colour is ${colour} ,discounted price for sale is ${price}`)
//   qq 
 const animal = {
    animalname : ' lepord',
    pcolour: 'black',
    area :'jungle'
    
    }
const {animalname, area} = animal;  
console.log(animalname);
// console.log(pcolour);//SyntaxError: Unexpected token ','
console.log(area);
//it will not automaticaaly ingonrr the blanck space as in aary we can do this 
const productDetails={
    productname :"skybag",
    category :"stationary",
    type :"treking bag",
    
}
const { productname : bagname,category,type }= productDetails;
console.log(bagname);
console.log(`the category of this bag is ${category} and type is ${type}`)
// qq
const laptop = {
    brand: "Apple",
    model: "MacBook Air",
    price1: 999
};

let {brand,model,price1} = laptop;
console.log(brand);
console.log(model);
console.log(price1);
//  qq
 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
let {firstName:fname,lastName:lname } = person;
console.log(fname);
console.log(lname);

const address = {
    city1: "New York"
};

let {city1,country="usa"}=address;
console.log(city1);
console.log(country);
// qq
  const user1 = {
    namee: "Alice",
    address1: {
        street: "123 Main St",
        zipcode: 10001
    }
};

let {address1:{street,zipcode}} =user1;
console.log(street)
  console.log(zipcode)
//  qq   
const productDetail = {
    productName: "Nike Shoes",
    category: "Footwear",
    price: 120
};

function displayProduct(product) {
  let   {productName,category} = product;
  console.log('product:',productName);
   console.log('category:',category);
    return ;
}

 displayProduct(productDetail);

//function currying in js 
const multiply1 = (a) => (b) => (c) => a * b * c;

console.log(multiply1(2)(3)(4)); // Output: 24


function multi(x,y){
    return x*y;
}
const multiply = multi.bind(this,8);
console.log(multiply(9))

function div(a,b){
    return a/b;
    
}
const division = div.bind(this ,10,20) //uderstand the vaules of a,b take time to see
console.log(division())
const dived = div.bind(this,20);//again in first function call we take taking a vule then below we are take b vaule
console.log(dived(2))





