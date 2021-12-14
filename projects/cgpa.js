
// CGPA program

console.dir(`****** CGPA Checker program`);

let studentName = prompt('Student Name:');
let studentRoll = prompt('Student Roll:');

let bangla = parseInt(prompt('Bangla Mark:'));
let english = parseInt(prompt('English Mark:'));
let mathmetics = parseInt(prompt('Mathmetics Mark:'));
let physics = parseInt(prompt('Physics Mark:'));
let religion = parseInt(prompt('Religion Mark:'));
let practical = parseInt(prompt('Practical Mark:'));

let totalMark = bangla + english + mathmetics + physics + religion + practical;

let cgpa = (totalMark / 6);


console.log(`

    Student Name   : ${studentName}
    Student Roll   : ${studentRoll} 

    Bangla         : ${bangla}
    English        : ${english}
    Mathmetics     : ${mathmetics}
    Physics        : ${physics}
    Practical      : ${practical}
    -------------------------------------
    Total Marks    : ${totalMark}
    CGPA           : ${cgpa.toFixed(2)}

`);