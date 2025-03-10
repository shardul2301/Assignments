

const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Shoes', price: 50, category: 'Clothing' },
  { name: 'Smartphone', price: 700, category: 'Electronics' },
  { name: 'Shirt', price: 30, category: 'Clothing' },
  { name: 'Tablet', price: 500, category: 'Electronics' },
  { name: 'Jacket', price: 120, category: 'Clothing' }
];
console.log(products)
//Filter the Electronics: Use filter() to exclude the "Electronics" category.
const ressult1 = products.filter((person)=>{
 return  person.category!='Electronics';
})
console.log('electronic cagegory not take',ressult1)
//Apply the 10% discount: Use map() to create a new array with the discounted prices.
 const result2= products.map((obj)=>{
     return obj.price-((obj.price *10)/100);
 })

console.log('the  discounted prices are : ',result2);


// Calculate the total sum: Use reduce() to sum the discounted prices

const result3= result2.reduce((acc,curr)=>{
return acc= acc+curr;
},0)

console.log('the total discounted price is : ',result3)

//random code 
//  const str   = 'shardul,mane';
//  const res = str.split(',');
//  console.log(res)
//  console.log(typeof res)
//   const str2 = [2,4,5,7] 
//  const res2 = str2.slice(1,3);
//  console.log(res2)
//  console.log(str2)
 
//  let n = 5;
//  do {
//      console.log('at least one time this excuted ')
//      console.log('one time run',n);
//     //  console.log(n)
//      n--
//  }
//  while(n>0);






















