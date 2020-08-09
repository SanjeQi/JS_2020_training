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

// const ages = years.map((el, indx) => `Age element ${indx}: ${2020 - el}`);
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

// /////////////////////////////Destructuring

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

// ///////////// Functions
// function calcAgeRetirenment(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirenment(1982);
// console.log(age, retirement);

// /////////////////////////////////////////////////////////// Arrays

// const boxes = document.querySelectorAll('.box'); // <-- Node List

// //ES5

// var boxArr5 = Array.prototype.slice.call(boxes); // <-- Array
// console.log(boxArr5);

// boxArr5.forEach(function (el) {
//   el.style.background = 'dodgerblue';
// });

// //ES6

// const boxArr6 = Array.from(boxes); // <-- Array

// boxArr6.forEach((el) => {
//   el.style.background = 'dodgerblue';
// });

// //ES5
// for (var i = 0; i < boxArr5.length; i++) {
//   if (boxArr5[i].className === 'box blue') {
//     //continue;
//     break;
//   }
//   boxArr5[i].textContent = 'I changed to blue';
// }

// //ES6  for-of  loop
// for (const cur of boxArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue';
// }

// ES5;
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (cur) {
//   return cur >= 18;
// });
// console.log(full);

// var z = full.indexOf(true);
// console.log(z, ages[z]);

// //ES6
// var ages = [12, 17, 8, 21, 14, 11];

// const z = ages.findIndex((cur) => {
//   cur >= 18;
// });
// console.log(z);

// ///////////////////////////////////////Spread Operator

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log('sum1:', sum1);

// //ES5
// ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log('sum2:', sum2);

// //ES6
// const sum3 = addFourAges(...ages);
// console.log('sum3:', sum3);

// const familySmith = ['Alex', 'John', 'Jane'];
// const familyMiller = ['Jane', 'Mary', 'Bob'];

// const bigFam = [...familyMiller, 'Ann and Chris', ...familySmith];
// console.log(bigFam);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];
// console.log(all);

// all.forEach((cur) => (cur.style.color = 'purple'));

// ///////////////////////////////////////////////Rest Parameters

// //ES5
// function isFullAge5() {
//   // console.log(arguments);
//   var argumentsArr = Array.prototype.slice.call(arguments);
//   argumentsArr.forEach(function (el) {
//     console.log(2020 - el >= 18);
//   });
// }

// isFullAge5(1990, 2011, 1992);
// isFullAge5(2001, 2014, 1965, 1990, 2020);

// //ES6

// function isFullAge6(...years) {
//   years.forEach((el) => console.log(2020 - el >= 18));
// }

// isFullAge6(2001, 2014, 1965, 1990, 2020);

// ////---------------------------------------------

// //ES5
// function isFullAge5(limit) {
//   // console.log(arguments);
//   var argumentsArr = Array.prototype.slice.call(arguments, 1);
//   argumentsArr.forEach(function (el) {
//     console.log(2020 - el >= limit);
//   });
//   console.log(argumentsArr);
// }

// isFullAge5(1990, 2011, 1992);
// isFullAge5(21, 2001, 2014, 1965, 1990, 2020);

// // ES6

// function isFullAge6(limit, ...years) {
//   years.forEach((el) => console.log(2020 - el >= limit));
// }

// isFullAge6(16, 2001, 2014, 1965, 1990, 2020);

// ///////////////////////////////////////////////////Default Paramenters

// //ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? (lastName = 'Smih') : lastName;
//   nationality === undefined ? (nationality = 'german') : nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
// console.log(john);
// console.log(emily);

// //ES6

// function SmithPerson(
//   firstName,
//   yearOfBirth,
//   lastName = 'smith',
//   nationality = 'american'
// ) {
//   lastName === undefined ? (lastName = 'Smih') : lastName;
//   nationality === undefined ? (nationality = 'german') : nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john1 = new SmithPerson('Bob', 1990);
// var emily2 = new SmithPerson('Ana', 1983, 'Xu', 'chinese');
// console.log(john1);
// console.log(emily2);

// //////////////////////////////////////////////// ES6 MAPS / Hash Map

// const question = new Map();

// //set
// question.set('key: question', 'value: What is  yours fav coding language?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'correct answer');
// question.set(false, 'wrong answer.try again');

// //get
// console.log(question.get('key: question'));
// // console.log(question.size);

// has;
// if (question.has(4)) {
//   question.delete(4);
// }

// //delete / clear
// question.delete(4);
// question.delete(4);

// question.clear(); //empty map

// looping;

// question.forEach((value, key) => {
//   console.log(`This key: ${key} is set to the value: ${value}`);
// });

// for (let [key, value] of question.entries()) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));

// ///////////////////////////////////////////////////////////Classes

// //ES5

// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculatAge = function () {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var john5 = new Person5('John', 1982, 'Painter');
// console.log(john5, john5.calculatAge());

// // ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }

//   static greeting() {
//     console.log('Hey there');
//   }
// }

// const john6 = new Person6('Johhny', 1970, 'teacher');
// console.log(john6, john6.calculateAge());

// Person6.greeting();

// //////////////////////////////////////////////////Classes and subClasses

// //ES5
// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calcAge = function () {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log('ES5: ', age);
// };

// var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedals = function () {
//   this.medals++;
//   console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
// johnAthlete5.calcAge();
// johnAthlete5.wonMedals();

// // ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calcAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth;
//     console.log('ES6: ', age);
//   }
// }

// class Athelete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedals() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athelete6('John', 1990, 'cyclist', 2, 10);
// johnAthlete6.calcAge();
// johnAthlete6.wonMedals();

// ES6;

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calcAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// const john = new Person6('Lae Porcu', 1982, 'teacher');
// console.log(john);

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedals() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const federer = new Athlete6('Roger Federer', 1990, 'tennis player', 3, 10);
// console.log(federer);

/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age all parks (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

/*
 Parks (name, buildYear, parkArea, numTrees)
     * 3 parks 
    Need in report:
    1.Tree density of each park in the town (forumla: number of trees/park area
    2.Average age all parks (forumla: sum of all ages/number of parks
    3.The name of the park that has more than 1000 trees

 Streets (name, buildYear, strLength, size)
  * 4 streets
  
  1. treeDensity - formula numTrees / parkArea
  
*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, parkArea, numTrees) {
    super(name, buildYear);
    this.parkArea = parkArea;
    this.numTrees = numTrees;
  }
  treeDensityCalc() {
    const treeDensity = (this.numTrees / this.parkArea).toFixed(2);
    console.log(
      `In the Park: ${this.name} the tree density is ${treeDensity} per square km`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, strLength, size = 3) {
    super(name, buildYear);
    this.strLength = strLength;
    this.size = size;
  }
  streetClassification() {
    const classification = new Map();
    //tiny/small/normal/big/huge
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `The ${this.name} Street was built in ${
        this.buildYear
      } and we can say is ${classification.get(this.size)}`
    );
  }
}

var allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949),
];

var allStreets = [
  new Street('Ocean Pier', 1999, 1.1, 4),
  new Street('Evergreen', 2008, 2.7, 2),
  new Street('Broadway ', 2015, 0.8, 4),
  new Street('Sunset Boulevard', 1982, 2.5, 5),
];

function streetReport(s) {
  console.log('--- Street Report ---');
  // 4. Total and average length of the town's streets
  const streetLength = s.map((el) => el.strLength);
  const [totalSteetsLength, averageStreetLength] = calc(streetLength);
  console.log(
    `The average streets legth is: ${averageStreetLength.toFixed(
      2
    )} km and Total streets length is ${totalSteetsLength.toFixed(2)} km`
  );
  // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
  s.forEach((el) => el.streetClassification());
}

function calc(array) {
  const sum = array.reduce((acc, char) => acc + char);
  return [sum, sum / array.length];
}

function parkReport(p) {
  console.log('--- Park Report ---');
  //   1. Tree density of each park in the town (forumla: number of trees/park area)
  p.forEach((el) => {
    el.treeDensityCalc();
  });
  // 2. Average age all parks (forumla: sum of all ages/number of parks)
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalParkAge, averageParkAge] = calc(ages);
  console.log(`Average age of the parks is ${averageParkAge.toFixed(2)}`);

  // 3. The name of the park that has more than 1000 trees
  const index = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
  console.log(`${p[index].name} has more than 1000 trees`);
}

streetReport(allStreets);
parkReport(allParks);
console.log(allParks);
console.log(allStreets);
