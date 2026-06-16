//adult users
const users = [
    { name: "John", age: 25 },
    { name: "Emma", age: 16 },
    { name: "Alex", age: 20 }
  ];
  
  const adults = users.filter(user => user.age >= 18);
  
  const adultNames = adults.map(user => user.name);
  
  console.log(adultNames);