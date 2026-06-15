const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

let salaries = employees.map(emp => emp.salary);
console.log(salaries);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary =", totalSalary);