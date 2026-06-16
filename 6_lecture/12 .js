//product prices
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
  ];
  
  const prices = products.map(product => product.price);
  console.log("Prices:", prices);
  
  const highestPrice = Math.max(...prices);
  console.log("Highest Price:", highestPrice);