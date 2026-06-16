//shopping cart
const cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 500 }
  ];
  
  const totalValue = cart.reduce((sum, product) => sum + product.price, 0);
  
  console.log(totalValue);