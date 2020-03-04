var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = "teacher";

// Variables naming rules
var $3years = 3;
var johnMark = "John and Mark";
var age2 = 23;

firstName = "Cristi";
lastName = "Constantinescu";
var a;

var age = 28;

age = "twenty eight";
job = "driver";

a = prompt("What is his last name?");
console.log(firstName + " " + a);

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now - 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "ageJohn");
console.log(typeof a);

//Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;

console.log(average);

var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //32 - 6 //26

x *= 2;
console;

var weightMark, weightJohn, heightMark, heightJohn;

weightMark = 78;
heightMark = 1.69;
markBMI = weightMark / (heightMark * heightMark);

weightJohn = 92;
heightJohn = 1.95;
johnBMI = weightJohn / (heightJohn * heightJohn);

markHigherBmiThanJohn = markBMI > johnBMI;

console.log(markBMI, johnBMI);

console.log("Is Mark's BMI higher than john's ? " + markHigherBmiThanJohn);

// /**
//  ********************** If Else
// /

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " se incoara in curand");
}

var isMarried = true;

if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " se incoara in curand");
}

var weightMark, weightJohn, heightMark, heightJohn;

weightMark = 78;
heightMark = 1.69;
markBMI = weightMark / (heightMark * heightMark);

weightJohn = 92;
heightJohn = 1.95;
johnBMI = weightJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
  console.log("Mark's BMI os higher than John's");
} else {
  console.log("John's BMI os higher than Marks's");
}

/**
 * ********************* Boolean Logic
 *
 */

var firstName = "John";
var age = 100;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}

/**
 *  The ternary Operator
 */

var firstName = "Lae";
var age = 22;

// Ternary Operator
age >= 18
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";

//Switch  statement

var job = "teacher";

switch (job) {
  case "teacher":
    console.log(firstName + " teacher");
    break;
  case "driver":
    console.log(firstName + " driver");
    break;
  case "designer":
    console.log(firstName + " designer");
    break;
  default:
    console.log(firstName + "$job");
}

var firstName = "John";
var age = 11;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
  default:
    console.log(firstName + " is a man");
}

/**
 * Truthy and Falsy values and equality operators
 */

//falsy value : undefined, null, 0 , '' , NaN
//truthy values : NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("The variable has not been defined");
}

// Equality operators

if (height === "23") {
  console.log("The == operator does type coercion");
}

/**
 * Coding Challenge 2
 */

var scoreJTmatch1, scoreJTmatch2, scoreJTmatch3, averageJT;

var scoreJMmatch1, scoreJMmatch2, scoreJMmatch3, averageMT;

var scoreMaryMmatch1, scoreMaryMmatch2, scoreMaryMmatch1, averageMaryT;

scoreJTmatch1 = 98;
scoreJTmatch2 = 120;
scoreJTmatch3 = 103;
averageJT = (scoreJTmatch1 + scoreJTmatch2 + scoreJTmatch3) / 3;

scoreJMmatch1 = 116;
scoreJMmatch2 = 94;
scoreJMmatch3 = 123;
averageMT = (scoreJMmatch1 + scoreJMmatch2 + scoreJMmatch3) / 3;

scoreMaryMmatch1 = 97;
scoreMaryMmatch2 = 23;
scoreMaryMmatch3 = 105;
averageMaryT = (scoreMaryMmatch1 + scoreMaryMmatch2 + scoreMaryMmatch3) / 3;

if (averageJT > averageMT && averageJT > averageMaryT) {
  console.log("John team is the winner.Their average score is: " + averageJT);
} else if (averageJT < averageMT && averageMaryT < averageMT) {
  console.log("Mike's team is the winner.Their average score is: " + averageMT);
} else if (averageJT < averageMaryT && averageMaryT > averageMT) {
  console.log(
    "Mary's team is the winner.Their average score is: " + averageMaryT
  );
} else {
  console.log("John, Mary and Mike's teams are equal. DRAW");
}

/**
 * Functions
 */

function calculateAge(birthYear) {
  return 2021 - birthYear;
}

let ageJohn = calculateAge(1982);
let ageMary = calculateAge(1990);
let ageMark = calculateAge(1092);

console.log(ageJohn, ageMary, ageMark);

function yearsUntilRet(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years ");
  } else {
    console.log(firstName + " is already retired ");
  }
}

yearsUntilRet(1990, "Lae");
yearsUntilRet(2001, "Mike");
yearsUntilRet(1900, "Mary");

/*************************
 * Function statement and expression's
 *
 *
 */

//Function declaration
function whatToYouDo(job, firstName) {}

//Function Expresion
var whatToYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drive a cab";
    case "designer":
      return firstName + " designes";
    default:
      return firstName + " does something else";
  }
};

console.log(whatToYouDo("teacher", "Lae"));
console.log(whatToYouDo("designer", "Lae"));
console.log(whatToYouDo("rock", "Lae"));

/**
 **************************** Arrays
 */

//Initializa new Array
var names = ["Lae", "Marie", "Jane"];
var years = new Array(1990, 1967, 1948);

//Mutate Array data
names[1] = "Mark";
names[names.length] = "Glogovetan";

console.log(names);

//Different data type

var john = ["john", "Smith", 1990, "teacher", false, "designer"];

john.push("blue"); //adauga la sfarsit
john.unshift("designer"); //adaug la inceput

john.pop(); // remove ultimul element
john.pop(); // remove ultimul element
john.shift(); //remove the first elem and returns it
john.shift(); //remove the first elem and returns it

// john.indexOf(1990); // returns position of the element in the Array ...returns -1 if element not present in array
// !!!!!! Most useful to test if element is present in the array

var isDesigner =
  john.indexOf("designer") === -1
    ? "Nu este designer"
    : "este designer.uite-te sus dooh";

console.log(john);
console.log(isDesigner);

/**
 * *************** Coding challenge !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

var tips = [];
var amountPerMeal = [];

var tipCalculator = function(bill) {
  if (bill < 50) {
    var tip1 = bill * (20 / 100);
    var meal1 = tip1 + bill;
    ///tips and meals
    tips.push(tip1);
    amountPerMeal.push(meal1);
  } else if (bill >= 50 && bill <= 200) {
    var tip2 = bill * (15 / 100);
    var meal2 = tip2 + bill;
    //tips and meals
    tips.push(tip2);
    amountPerMeal.push(meal2);
  } else {
    var tip3 = bill * (10 / 100);
    var meal3 = tip3 + bill;
    //tips and meals
    tips.push(tip3);
    amountPerMeal.push(meal3);
  }
  return tips, amountPerMeal;
};

console.log(tipCalculator(124));
console.log(tipCalculator(12));
console.log(tipCalculator(400));

/**************************** V2 = coding challenge */

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 256];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(finalValues);

/**
 * ******************** Objects and propeties
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

var x = "birthYear";
// console.log(john.firstName, john.isMarried);

john.job = "driver";
john["isMarried"] = true;

console.log(john);

var jane = new Object();

jane.name = "Jane";
jane.birthYear = 1967;
jane["lastName"] = "Smith";

console.log(jane);

/**
 ******************************* Objects and methods ----this
 */

////////////////////////////////V1
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1982,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: true,
  calcAge: function() {
    return 2021 - this.birthYear;
  }
};

console.log(john.calcAge());
console.log(john);

john.age = john.calcAge();

/////////////////////////////////////////V2
var john = {
  firstName: " John",
  lastName: "Simith",
  birthYear: 1986,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: true,
  calcAge: function() {
    this.age = 2021 - this.birthYear;
  }
};

john.calcAge();
console.log(john);

/**
 * ****************************************Coding Challenge 4
 */

var john = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

var mark = {
  fullName: "Mark Carder",
  mass: 78,
  height: 1.69,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

john.bmiCalc();
mark.bmiCalc();

var topBmi = function() {
  if (john.bmi < mark.bmi) {
    return mark.fullName + " has a higher BMI than John : " + mark.bmi + " kg";
  } else if (mark.bmi < john.bmi) {
    return john.fullName + " has a higher BMI than Mark : " + john.bmi + " kg";
  } else {
    return "both BMI's are the same " + john.bmi;
  }
};

console.log(topBmi());

/**
 * ******************************************Loops and iterations
 */

//////////////////////////////////////////// FOR
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

///////////////////////////////////////////While
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

////////////////////////////////////////continue and break statements

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

//////////////////////////////////////// Looping backward

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
/**
 * **************************************** Coding Challenge 5
 */

var john = {
  name: "John Smith",
  bill: [124, 48, 268, 180, 42],
  tipCalc: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        this.tip.push(this.bill[i] * 0.2);
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        this.tip.push(this.bill[i] * 0.15);
      } else {
        this.tip.push(this.bill[i] * 0.1);
      }
    }
  },
  tip: [],
  tipPlusBill: [],
  calcTipBill: function() {
    for (var i = 0; i < this.bill.length; i++) {
      this.tipPlusBill.push(this.bill[i] + this.tip[i]);
    }
  }
};

var mark = {
  name: "Mark Carder",
  bill: [77, 375, 110, 45],
  tipCalc: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        this.tip.push(this.bill[i] * 0.2);
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        this.tip.push(this.bill[i] * 0.1);
      } else {
        this.tip.push(this.bill[i] * 0.25);
      }
    }
  },
  tip: [],
  tipPlusBill: [],
  calcTipBill: function() {
    for (var i = 0; i < this.bill.length; i++) {
      this.tipPlusBill.push(this.bill[i] + this.tip[i]);
    }
  }
};

john.tipCalc();
john.calcTipBill();
console.log(john);

mark.tipCalc();
mark.calcTipBill();
console.log(mark);

var tipAverage = function(tipArr) {
  var sum = 0;
  for (var i = 0; i < tipArr.length; i++) {
    sum += tipArr[i];
  }
  return sum / tipArr.length;
};

console.log(tipAverage(john.tip));
console.log(tipAverage(mark.tip));

var topTipper = function() {
  if (tipAverage(john.tip) > tipAverage(mark.tip)) {
    console.log(
      "Johns's family paid the hightest average tip of: " + tipAverage(john.tip)
    );
  } else if (tipAverage(mark.tip) > tipAverage(john.tip)) {
    console.log(
      "Marks's family paid the hightest average tip of: " + tipAverage(mark.tip)
    );
  } else {
    console.log(
      " Both families paid the same average tip " + tipAverage(mark.tip)
    );
  }
};

////////////////////// Refactor

var topTipper = function() {
  var tipJF = tipAverage(john.tip);
  var tipMF = tipAverage(mark.tip);

  if (tipJF > tipMF) {
    console.log("Johns's family paid the hightest average tip of: " + tipJF);
  } else if (tipMF > tipJF) {
    console.log("Marks's family paid the hightest average tip of: " + tipMF);
  } else {
    console.log(" Both families paid the same average tip " + tipMF);
  }
};

topTipper();

////////////////////////////////////////////////////////////////////////V2

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      // Determine the percentage
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      //Add results to corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  }
};

mark = {
  fullName: "Mark Carder",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      // det percentage
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      // add to arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  }
};

john.calcTips();
console.log(john);

mark.calcTips();
console.log(mark);
