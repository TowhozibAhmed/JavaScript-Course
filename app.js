
// // 1st Class

// // 1st class Assignment's

// // Send data to console with template literal
// console.dir(`******Send Data to console with template literal Project Here:`)

// console.log(`Hi there! I\'m Towhozib Ahmed Tomal. I am a JavaScript Developer. My yearly salary is $1300.`)


// // Separetor
// console.dir('=================================');

// // Dynamic Developer's info console project

// // dev stand's for Developer
// console.dir(`******Developer Information Project Here:`)

// let devName = prompt('Your Name:');
// let devAge = prompt('Your Age:')
// let devStack = prompt('Your Stack:');
// let devSalary = prompt('Your Salary:');
// let devCountry = prompt('Your Country:');

// console.log(`My name is ${devName}. I am only ${devAge} years old. I am a ${devStack} Developer. I am from ${devCountry}. My yearly salary is $${devSalary}.`);



// // Separetor
// console.dir('=================================');

// // Result Mark's Project
// console.dir(`******Result Mark's Project Here:`)

// console.log(prompt('Bangla:'))
// console.log(prompt('English:'))
// console.log(prompt('Mathmetics:'))
// console.log(prompt('Sports:'))




// // Separetor
// console.dir('=================================');


// // Dynamic Kobul Project
// console.dir(`******Kobul Project Here:`)

// console.log(prompt('Enter your Name:'))

// console.log(prompt('Enter the Evidence Name-1:'));
// console.log(prompt('Enter the Evidence Name-2:'));
// console.log(prompt('Enter the Evidence Name-3:'));
// console.log(prompt('Enter the Evidence Name-4:'));

// console.log(confirm('Do you Agree?'))








// Array Practice


// const student = [
//     {
//         roll: 1,
//         name: 'Towhozib Ahmed Tomal',
//         age: 12,
//         location: 'Kushtia',
//         gender: 'Male'
//     },
//     {
//         roll: 2,
//         name: 'Abdur Rahim',
//         age: 22,
//         location: 'Mirpur',
//         gender: 'Male'
//     },
//     {
//         roll: 3,
//         name: 'Saba',
//         age: 8,
//         location: 'Uttara',
//         gender: 'Female'
//     },
//     {
//         roll: 4,
//         name: 'Ratul Ahmed',
//         age: 20,
//         location: 'Dhaka',
//         gender: 'Male'
//     },
// ];

// console.log(student[1])

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i].name);
// }

// for (let i = 0; i < student.length; i++) {

//     console.log(`
//         Roll    : ${student[i].roll},
//         Name    : ${student[i].name},
//         Age     : ${student[i].age},
//         location: ${student[i].location},
//         Gender  : ${student[i].gender},


//         -------------------------------------
//     `)

// };

// let a = 10;
// if (a === '10') {
//     console.log(false);
// } else if (a == '10'){
//     console.log(true);
// } else {
//     console.log('none of them')
// }

// let num = 1;
// switch(num) {
//     case 1:
//     num = 2;
//     default:
//          num = 0;
// }
// console.log(num);


//*** Switch Statement ***

// let day = parseInt(prompt('Enter day Number:'));

// switch (day) {
//     case 0:
//         console.log('Today is Monday');
//         break;
//     case 1:
//         console.log('Today is Tuesday');
//         break
//     case 2:
//         console.log('Today is Wednesday');
//         break;
//     case 3:
//         console.log('Today is Thursday');
//         break;
//     case 4:
//         console.log('Today is Friday');
//         break;
//     case 5:
//         console.log('Today is Saturday');
//         break;
//     case 6:
//         console.log('Today is Sunday');
//         break ;

//     default:
//         console.log('Enter The Valid day');
//         break;
// }


// Class 3 ********

// A loop that will rotate from 1000 to 300
// for (let i = 1000; i >= 300; i--) {

//     console.log(i);

// }



// Find the even and odd numbers from 1 and 1000 through for loop

// for (let i = 1; i <= 1000; i++) { // This is Even no. Program

//     if (i % 2 == 0) {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 1000; i++) { // This is Odd no. Program


//     if (i % 2 != 0) {
//         console.log(i);
//     }

// }




// Find the number divisible by 7 between 1 and 1000

// for (let i = 0; i <= 1000; i++) {

//     if (i % 7 == 0) {
//         console.log(i)
//     }

// }


// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice.

// let i = 10000;

// while (i < 10050) {
//     console.log(i)
//     i++
// }

// let a = 10000;

// while (a > 9950) {
//     console.log(a)
//     a--
// }




// A loop that will rotate 500 times using the for loop where you just pull out the numbers divisible by 3 and 4

// for (let i = 1; i <= 500; i++) {

//     if (i % 3 == 0) {
//         console.log(i);
//     } else if (i % 4 == 0) {
//         console.log(i);
//     }

// }


// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

// for (let i = 23; i < 1000; i = i + 3) {

//     console.log(i);

//     if (i % 11 == 0) {
//         break
//     }

// }





// let i = 1;

// while (i <= 10) {

//     console.log(i);
//     i++
// }

// let i = 1;

// do {
//     console.log(i);
//     i++
// } while(1 <= 10);

// program to display numbers
// let i;

// console.log(i)
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// }  while(i < 540)

// let value = (20 < 21) ? 'This will be executed if the condition is true' : 'This value will execute if the condition is false';

// console.log(value)



// function devInfo(devName = '_____', devAge = '__', devStack = '____________') {

//   return `My name is ${devName}. I am ${devAge} years old. I am a ${devStack} developer`;


// }

// console.log(devInfo('Towhozib Ahmed Tomal', 18, 'Javascript'));

// function squareArea(length) {
//   return length * length
// }


// console.log(squareArea(20));


// function area(type, length, width) {

//   if (type == 'square') {
//     return length * length
//   } else if (type == 'triangle') {
//     return .5 * length * width
//   } else if (type == 'rectangle') {
//     return length * width
//   }

// }


// console.log(`area('square', 23)`);


// let lengthValue = parseInt(prompt('Enter Length:'));
// let widthValue = parseInt(prompt('Enter Width:'));
// let heightValue = parseInt(prompt('Enter Height:'));

// console.log(`

//   Length = ${lengthValue}
//   Width  = ${widthValue}
//   Height = ${heightValue}
//   =========================
//   Aria of triangle = ${area('triangle', lengthValue, widthValue)}

// `);


// Browser Storage Practice

const students = [
  {
    id: 1,
    name: 'Towhozib Ahmed Tomal',
    age: 17,
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Towhozib Ahmed',
    age: 15,
    skill: 'Java'
  },
  {
    id: 3,
    name: 'Towhozib',
    age: 13,
    skill: 'Python'
  }
];


// localStorage.setItem('Name','Towhozib Ahmed Tomal');
// localStorage.setItem('Age','17');
// localStorage.setItem('Skill','JavaScript');

localStorage.setItem('Data', JSON.stringify(students))


let data = localStorage.getItem('Data');

console.log(JSON.parse(data));
