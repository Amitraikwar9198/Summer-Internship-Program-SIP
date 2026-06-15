const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const prices = products.map(p => p.price);

console.log(prices);
console.log(Math.max(...prices));