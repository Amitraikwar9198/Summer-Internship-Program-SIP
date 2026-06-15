const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];
 
for (const student of students) {
  const average =
    student.marks.reduce((sum, mark) => sum + mark, 0) /
    student.marks.length;

  if (average >= 85) {
    console.log(`Name : ${student.name} Average : ${average}`);
  }
}
