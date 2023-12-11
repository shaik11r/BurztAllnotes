//callback function is a function that is passed as argument to another function

// const greet = (name, welcome) => {
//   console.log(`hi ${name}`);
//   welcome(); //function invoke
// };
// const welcome = () => {
//   console.log("welcome");
// };
// greet("jhon", welcome);

// const order = (callback, x) => {
//   if (x) {
//     console.log("payment is completed"); //some tasks
//     callback();
//   } else {
//     console.log("payment failed");
//   }
// };
// const outfordelv = () => {
//   console.log("out for delivery");
// };
// order(outfordelv, 0);

const printAge = (age) => {
  console.log("this is printage function", age);
};
const isAgeOdd = (age, callback) => {
  if (age % 2 !== 0) {
    callback(age);
  } else {
    console.log("age is not odd", age);
  }
};
isAgeOdd(23, printAge);
