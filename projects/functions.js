

// // 4th Class 

// // Function practice 

// function firstFuction() {
//     console.log('This is my first Function.')
// }

// firstFuction(); // Function Invock || Function Call

// function dev(){
//     console.log(`My name is Towhozib Ahmed Tomal & I am almost 18 years old & a programming lover.`);
// };

// dev(); // Function can be Invocked any where in the script. I mean before the declaration || After the declaration.

// function devName(devname = 'Mr. Handsome'){
//     console.log(`My name is ${devname} & I am almost 18 years old & a programming lover.`);
// }

// devName('Towhozib Ahmed Tomal');
// devName('Towhozib Ahmed');
// devName();


// function gpa(marks) {
//     let gpa;

//     if (marks >= 0 && marks <= 32) {
//         gpa = 0;
//     } else if (marks >= 33 && marks < 40) {
//         gpa = 1;
//     } else if (marks >= 40 && marks < 50) {
//         gpa = 2;
//     } else if (marks >= 50 && marks < 60) {
//         gpa = 3;
//     } else if (marks >= 60 && marks < 70) {
//         gpa = 3.5;
//     } else if (marks >= 70 && marks < 80) {
//         gpa = 4;
//     } else if (marks >= 80 && marks < 100) {
//         gpa = 5;
//     }
// }


// Function Declaration:
function demoFunction(name, year) {
    return '';
}


// Function Expression:
let demoFunction1 = function (name, year) {
    return '';
}


// Arrow Function:
let demoFunction2 = (name, year) => {
    return '';
}

let demoFunction3 = year => {
    return 2021 - year;
}
let demoFunction4 = year => 2021 - year



console.log(demoFunction4(2004));


// Constractor Function

function TomalFunction() {

    this.mal = function () {
        return 'This is a child function of Tomal.'
    }

    this.malbabu = function () {
        return 'This is another child function of Tomal.'
    }




}



