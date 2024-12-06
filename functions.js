console.log("Functions");

// function :  a set of statements that perform a task or calculate value that is function

function CalcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  // const fullDetails = `i'm ${firstName} and my age is ${age}`;
  console.log(`i'm ${firstName} and my age is ${age}`);
  // return fullDetails;
}

const ageDetails = CalcAge(1991, "sun");
// console.log(ageDetails);

// function declaration and expressions

//////////////////////////////
// function Declaration : function that can be declare the before it's declared.

console.log("Function Declaration");

function newAge(birthYear) {
  return 2037 - birthYear;
}

const age1 = newAge(1991);
console.log(age1);

//////////////////////////////
// function expression => essentially a function value stored in a variable

console.log("Function Expression");

const fullAge = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = fullAge(1990);
console.log(age2);

////////////////////////////
// arrow function : it declare with => symbol

console.log("Arrow Function");

const add = (a, b) => {
  console.log(a + b);
  console.log(a - b);
};

const adding = add(2, 4);

//////////////////////////////////////////////
// function calling other functions

console.log("Function calling Other function");

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;

  return juice;
}

fruitProcessor(4, 8);
console.log(fruitProcessor(12, 14));
