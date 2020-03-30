// Function constructor

// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

var Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Biro";

var john = new Person("John", 1992, "writer");
var jane = new Person("Jane", 1982, "designer");
var mark = new Person("Mark", 1928, "engineer");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
