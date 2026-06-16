const patients = [
  { id: 1, name: "Amit", age: 21 },
  { id: 2, name: "Rahul", age: 30 },
  { id: 3, name: "Priya", age: 25 }
];

// Display all patient names
patients.forEach(patient => console.log(patient.name));

// Find patient by ID
const patient = patients.find(p => p.id === 2);
console.log(patient);

// Add new patient
patients.push({ id: 4, name: "Neha", age: 28 });

// Remove patient
const updatedPatients = patients.filter(p => p.id !== 1);

console.log(updatedPatients);

const patients = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

const totalPatients = patients.length;

console.log("Total Patients:", totalPatients);

const doctors = [
  { name: "Dr. Sharma", dept: "Cardiology" },
  { name: "Dr. Verma", dept: "Neurology" },
  { name: "Dr. Singh", dept: "Cardiology" }
];

const result = doctors.reduce((acc, doctor) => {
  acc[doctor.dept] = (acc[doctor.dept] || 0) + 1;
  return acc;
}, {});

console.log(result);



const patients = [
  { name: "Amit", age: 20 },
  { name: "Rahul", age: 25 },
  { name: "Priya", age: 30 }
];

const totalAge = patients.reduce((sum, p) => sum + p.age, 0);

const averageAge = totalAge / patients.length;

console.log("Average Age:", averageAge);


const medicines = [
  { name: "Paracetamol", stock: 100 },
  { name: "Dolo", stock: 50 },
  { name: "Aspirin", stock: 20 }
];

// Low Stock
const lowStock = medicines.filter(m => m.stock < 30);

console.log(lowStock);

// Update Stock
medicines[0].stock -= 10;

console.log(medicines);



const bills = [
  { patient: "Amit", amount: 2000 },
  { patient: "Rahul", amount: 3000 },
  { patient: "Priya", amount: 2500 }
];



const patients = [
  { name: "Amit", priority: "Normal" },
  { name: "Rahul", priority: "Emergency" },
  { name: "Priya", priority: "Emergency" }
];

const emergencyPatients =
  patients.filter(
    p => p.priority === "Emergency"
  );

console.log(emergencyPatients);



const patients = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

const search =
  patients.filter(
    p => p.name === "Rahul"
  );

console.log(search);




