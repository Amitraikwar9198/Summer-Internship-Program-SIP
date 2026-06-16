const patients = [
    { id: 1, name: "Amit", age: 20 },
    { id: 2, name: "Manish", age: 21 },
    { id: 3, name: "Raushan", age: 25 },
    { id: 4, name: "Aham", age: 26 },
    { id: 5, name: "Kunal", age: 23 },
    { id: 6, name: "Anurag", age: 22 },
];
patients.forEach(patient => console.log(patient.name));

const patient = patients.find(p => p.id == 1);
console.log(patient);

patients.push({ id: 7, name: "Neha", age: 20 });
console.log(patients);

const totalpatients = patients.length;
console.log("Total Patients", totalpatients);



/// Doctor

const doctors = [
    { id:11,name: "Dr. Kashyap", department: "Cardiology" , Time: "10:30 TO 01:00" ,Days:"MON, WED,FRI" },
    { id:12,name: "Dr. singh", department: "Neurology" ,Time:"1:30 TO 04:00",Days:"TUE,THU,SAT" },
];

doctors.forEach(d => console.log(d.name));

const dkashyap=doctors.find(k=>k.id==11);
console.log(dkashyap);
const doctor = doctors.length;
console.log("Total Doctors : ", doctor);

const drkashyap=[
    { id: 1, name: "Amit", age: 20, Time: "10:45" ,Days:"MON" },
    { id: 2, name: "Manish", age: 21,Time: "11:05" ,Days:"WED" },
    { id: 3, name: "Raushan", age: 25,Time: "12:00" ,Days:"FRI" },
];

console.log("Dr. Kashyap patients : ", drkashyap)

const drsingh=[
    { id: 4, name: "Aham", age: 26,Time: "10:45" ,Days:"TUE" },
    { id: 5, name: "Kunal", age: 23 ,Time: "11:05" ,Days:"THU"},
    { id: 6, name: "Anurag", age: 22,Time: "11:05" ,Days:"SAT" },
];
console.log("Dr. Singh patients : ", drsingh)




