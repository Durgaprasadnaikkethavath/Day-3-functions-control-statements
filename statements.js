console.log("control statements");

//////////////////////////////////////
// if :         it allow you can to execute the code only if a specified condition is true.
// if..else :   you can also uses else statement is alternative condition is false.

console.log("--------------------- if else -----------------------");

const age = 23;
if (age > 18) {
  console.log("Your age above 18");
} else {
  console.log("Your age under 18");
}

// switch : evaluate an expression aganist multiple possible cases. it's often more than using multiple if else statement

//////////////////////////////////////
// for loop: when you know in advance how many times you need to execute a statement or block of statement.

console.log("----------------- For Loop -------------------");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//////////////////////////////////
// while : loop repeats as long as specified condition is true

console.log("------------------- While Loop -----------------");

// let x = 0;
// while (x < 5) {
//   // console.log(x);
//   // x++;
// }

console.log("------------------- do While Loop -----------------");
// similar to while loop but the code inside the loop is executed once before execute the code checking the execution

// let y = 0;

// do {
//   console.log(y);
//   y++;
// } while (y < 5);

////////////////////////////////////////
// For In: for..in loop is used to itrate over the properties of an object.
console.log("-------------------- For In --------------------------");
const person = {
  name: "durga",
  age: 23,
};

for (let key in person) {
  console.log(key, person[key]);
}

//////////////////////////////////////////
// For of : over the iterable objects likes... arrays, strings...ect.

console.log("----------------------- For Of ------------------------");

const num = [1, 2, 3, 4, 5];

for (let number of num) {
  console.log(number);
}
