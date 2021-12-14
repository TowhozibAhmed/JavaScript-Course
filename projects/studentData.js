// Student Data Program

const studentData = [
    {
        id: 1,
        roll: 1,
        name: 'Towhozib Ahmed Tomal',
        age: 18,
        location: 'Kushtia',
        gender: 'Male',
        bn: 80,
        en: 56,
        math: 68,
        s: 97,
        ss: 45,
        religion: 90
    },
    {
        id: 2,
        roll: 2,
        name: 'Ratul Ahmed',
        age: 20,
        location: 'Kushtia',
        gender: 'Male',
        bn: 80,
        en: 56,
        math: 68,
        s: 97,
        ss: 45,
        religion: 90
    },
    {
        id: 3,
        roll: 3,
        name: 'Zakir Hossain',
        age: 24,
        location: 'Philip Nagar Char',
        gender: 'Male',
        bn: 80,
        en: 56,
        math: 68,
        s: 97,
        ss: 45,
        religion: 90
    },
    {
        id: 4,
        roll: 4,
        name: 'Rasel Ahmed',
        age: 35,
        location: 'Bursa',
        gender: 'Male',
        bn: 80,
        en: 97,
        math: 78,
        s: 97,
        ss: 89,
        religion: 90
    },
];


studentData.map((data, indexNo) => {
    console.log((indexNo + 1) + '. ');

    console.log(`
        Id       : ${data.id}
        Name     : ${data.name}
        Age      : ${data.age}
        Gender   : ${data.gender}
        Location : ${data.location}

        Subject    Marks    GPA    Grade     CGPA      Final Result

        Bangla     ${data.bn}
        English    ${data.en}
        Math       ${data.math}
        Science    ${data.s}
        Soical S   ${data.ss}  

    `)
 
})


function Result() {


    this.Result = function (marks) {
        let gpa;
        let grade;

        if (marks >= 0 && marks < 33) {
            gpa = 0;
            grade = 'F';
        } else if (marks >= 33 && marks < 40) {
            gpa = 1;
            grade = 'D';
        } else if (marks >= 40 && marks < 50) {
            gpa = 2;
            grade = 'C';
        } else if (marks >= 50 && marks < 60) {
            gpa = 3;
            grade = 'B';
        } else if (marks >= 60 && marks < 70) {
            gpa = 3.5;
            grade = 'A-';
        } else if (marks >= 70 && marks < 80) {
            gpa = 4;
            grade = 'A';
        } else if (marks >= 80 && marks < 100) {
            gpa = 5;
            grade = 'A+';
        } else {
            gpa = 'Invalid';
            grade = 'Invalid';
        }

        return {
            gpa: gpa,
            grade: grade
        }


    }


}