const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 10 }
];

const available = products
  .filter(p => p.stock > 0)
  .map(p => p.name);

console.log(available);