// ///////////////////////////////////////////////// Let and Const

// //ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane M'; //<----err can not reassign
// console.log(name6);

// //ES5
// function driverLicence(passTest) {
//   if (passTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName + ' is born in: ' + yearOfBirth + ' and is allowed to drive'
//   );
// }

// driverLicence(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// /////////////////////////////////////////Blocks and IIFS

// //ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
// console.log(c);
// console.log(b);
// console.log(a);

// ///////////////////////////////////////// Strings in ES6

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge() {
//   return 2020 - yearOfBirth;
// }

// //ES5
// console.log(
//   'This is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '. He was born in ' +
//     yearOfBirth +
//     '. Today, he is ' +
//     calcAge(yearOfBirth) +
//     ' years old.'
// );

// //ES6

// console.log();

// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;

// console.log(
//   `This is ${n}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// //////////////////////////////////////// String Methods in ES6
// //startsWith()
// //endsWith()
// //includes()
// //repeat()
// console.log(n); // -> John Smith
// console.log(n.startsWith('J')); // -> true
// console.log(n.endsWith('H')); // -> false
// console.log(n.includes('i')); // -> true
// console.log(n.repeat(5)); // -> John SmithJohn SmithJohn SmithJohn SmithJohn Smith

// //////////////////////////////////Arrow functions

// const years = [1990, 1991, 1992, 1993];

// //ES5
// var ages5 = years.map(function (cur, indx, arr) {
//   return 2020 - cur;
// });
// console.log(ages5);

// //ES6

// let ages6 = years.map((cur) => 2020 - cur);
// console.log(ages6);

// const ages7 = years.map((el, indx) => `Age element ${indx}: ${2020 - el}`);
// console.log(ages7);

// const ages8 = years.map((el, indx) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${indx}: ${2020 - el}`;
// });

// console.log(ages8);

// /////////////////////////////////////Arrow function part 2

// //ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function () {
//       var str =
//         'This is box number is: ' + self.position + ' and is ' + self.color;
//       alert(str);
//     });
//   },
// };

// box5.clickMe();

// //ES6

// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     document.querySelector('.green').addEventListener('click', () => {
//       const str =
//         'This is box number is: ' + this.position + ' and is ' + this.color;
//       alert(str);
//     });
//   },
// };

// box5.clickMe();

// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       const str =
//         'This is box number is: ' + this.position + ' and is ' + this.color;
//       alert(str);
//     });
//   },
// };

// box5.clickMe();

// function Person(name) {
//   this.name = name;
// }

// //ES5
// Person.prototype.myFrinds5 = function (friends) {
//   var arr = friends.map(
//     function (el) {
//       return this.name + ' is friends with ' + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var friends = ['Bob', 'Jane', 'Mark'];
// const john = new Person('John').myFrinds5(friends);
// console.log(john);

// ES6;

// Person.prototype.myFrinds5 = function (friends) {
//   let arr = friends.map((el) => {
//     return `${this.name} is friends with ${el}`;
//   });
//   console.log(arr);
// };

// const friends = ['Bob', 'Jane', 'Mark'];
// const mike = new Person('Mike').myFrinds5(friends);
// console.log(john);

///////////////////////////////Destructuring

// //ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];
// console.log(name, age);

// //ES6

// /////////////// Array
// const [name, age] = ['John', 23];
// console.log(name, age);

// /////////////// Object
// const obj = {
//   firstName: 'John',
//   lastName: 'Snow',
// };

// // Object v1
// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// // Object v2 use with different variable nemes instead of the keys from the object

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

/////////////// Functions
function calcAgeRetirenment(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirenment(1982);
console.log(age, retirement);
