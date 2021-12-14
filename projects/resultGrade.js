
// Result Grade checker program

console.dir(`****** Result Grade program:`);

let studentName = prompt('Student Name:');
let studentRoll = prompt('Roll No:')
let marks = prompt('Put your marks here:');

if (marks >= 0 && marks <= 33) {
    console.log(`Hi ${studentName} You have got GPA: 0 & Failed in the Exam.`)
} else if (marks >= 33 && marks < 40) {
    console.log(`Hi ${studentName} You have got GPA: 1 and D Grade.`)
} else if (marks >= 40 && marks < 50) {
    console.log(`Hi ${studentName} You have got GPA: 2 and C Grade.`)
} else if (marks >= 50 && marks < 60) {
    console.log(`Hi ${studentName} You have got GPA: 3 and B Grade.`)
} else if (marks >= 60 && marks < 70) {
    console.log(`Hi ${studentName} You have got GPA: 3.5 and A- Grade.`)
} else if (marks >= 70 && marks < 80) {
    console.log(`Hi ${studentName} You have got GPA: 4 and A Grade.`)
} else if (marks >= 80 && marks < 100) {
    console.log(`Hi ${studentName} You have got GPA: 5 and A+ Grade.`)
} else if (marks == 100) {
    console.log(`Hi ${studentName}, What have you done!!!!`)
} else {
    console.log(`${studentName} You are a cheater.`)
}
