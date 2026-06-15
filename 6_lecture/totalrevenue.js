const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

let total = sales.reduce((sum, item) => sum + item.amount, 0);

console.log("Total Revenue =", total);