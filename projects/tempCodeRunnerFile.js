const patients = [
    { id: 1, name: "Amit", age: 20 },
    { id: 2, name: "Manish", age: 21 },
    { id: 3, name: "Raushan", age: 25 },
    { id: 4, name: "Aham", age: 26 },
    { id: 5, name: "Kunal", age: 23 },
    { id: 6, name: "Anurag", age: 22 },
];
patients.forEach(patient => console.log(patient.name));
const patient = patients.find(p => p.id == 2);
console.log(patient);
patients.push(
    { id: 7, name: "Neha", age: 20 }
);
console.log(patients);
const totalpatients = patients.length;
console.log("Total Patients", totalpatients);



/// Doctor

const doctors = [
    { name: "Dr. Kashyap", department: "Cardiology" },
    { name: "Dr. singh", department: "Neurology" },
];

doctors.forEach(d => console.log(d.name));

const dr = doctors.find(d => d.id == 1);
console.log(dr);
const doctor = doctors.length;
console.log("Total Doctors : ", doctor);
