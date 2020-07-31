// Let and Const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane M'; //<----err can not reassign
console.log(name6);

//ES5
function driverLicence(passTest) {
  if (passTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(
    firstName + ' is born in: ' + yearOfBirth + ' and is allowed to drive'
  );
}

driverLicence(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
