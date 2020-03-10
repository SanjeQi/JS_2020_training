//Hoisting

calculateAge(1965);
retirement(1990); /// this will error out. the function expression is set to undefined in the Variable object
//Same as variables. Should be used ofter the line in which is declared

//Function declaration
function calculateAge(year) {
  console.log(2021 - year);
}

// Function expression
var retirement = function(year) {
  console.log(65 - (2016 - year));
};

Variables;

console.log(age); // this will return undefined. For each variable, a property is created on the Variable Object and is set to undefined
var age = 23;

function foo() {
  var age = 55;
  console.log(age);
}

foo();
console.log(age);

var a = "Hello";

first();

function first() {
  var b = "Hi";
  second();

  function second() {
    var c = "Hey";
    third();
  }
}

function third() {
  var d = " John";
  console.log(c);
}

///-----------------The "this" keyword

console.log(this);

calculateAge(1982);

function calculateAge(year) {
  console.log(2021 - year);
  console.log(this);
}

var john = {
  name: "john",
  yearBirth: "1982",
  calculateAge: function() {
    console.log(2021 - this.yearBirth);
    console.log(this);
    /*function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearBirth: 1984
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();
