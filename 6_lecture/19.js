//product discount
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
  ];
  
  const updatedPrices = products.map(product => product.price * 0.9);
  
  console.log(updatedPrices);