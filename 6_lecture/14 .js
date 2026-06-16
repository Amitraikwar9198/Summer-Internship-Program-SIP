//student marks
const marks = [45, 80, 60, 90, 30];

const filteredMarks = marks.filter(mark => mark > 50);

const average = filteredMarks.reduce((sum, mark) => sum + mark, 0) / filteredMarks.length;

console.log("Filtered Marks:", filteredMarks);
console.log("Average:", average);