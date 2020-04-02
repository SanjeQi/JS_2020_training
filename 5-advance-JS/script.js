// Function constructor

// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

// var Person = function(name, yearOfBirth, job) {
//   (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
// };

// Person.prototype.calculateAge = function() {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Biro";

// var john = new Person("John", 1992, "writer");
// var jane = new Person("Jane", 1982, "designer");
// var mark = new Person("Mark", 1928, "engineer");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

//Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

//V1
var john = Object.create(personProto);

john.name = "John";
john.yearOfBirth = 1990;
john.job = "climber";

//V2
var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
*/

//Primitives vs Objects

// var a = 23;
// var b = a;
// a = 46;

// var obj1 = {
//   name: "John",
//   age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

//Functions
/*
var age = 27;
var obj = {
  name: "Jonas",
  city: "London"
};

function change(a, b) {
  a = 30;
  b.city = "Sibiu";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

//Passing Functions as arguments
/*
var years = [1982, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

//Function returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", what is UX?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", what are you teaching?");
    };
  } else {
    return function(name) {
      console.log("Unknown job. Pls tell us " + name + ", what do you do?");
    };
  }
}

// var teacherQuestion = interviewQuestion("teacher");
// console.log(teacherQuestion);
// teacherQuestion("John");

// var designerQuestion = interviewQuestion("designer");
// console.log(designerQuestion);
// teacherQuestion("Bobar");

interviewQuestion("engineer")("Bob");
