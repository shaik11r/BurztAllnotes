/**
 * if and else and else if
 * switch
 */
// let a = 0;
// let b = 3;
// if (a >= 2) {
//   console.log("a is greater than or equal to 2");
// } else if (a === "0") {
//   console.log("a is zero");
// } else {
//   console.log("default case");
// }

let weatherConditon = "Sunny";
let subConditon = "TooCold";

if (weatherConditon === "Cloudy") {
  console.log("take the umbrella");
  //
} else if (weatherConditon === "Rainy") {
  console.log("Use the umbrella");
} else if (weatherConditon === "Sunny") {
  if (subConditon === "TooHot") {
    console.log("use the umbrella");
  } else {
    console.log("dont use the umbrella");
  }
} else {
  console.log("Dont take the umbrella");
}

//Ternary operator

let x = 10;

x > 10 ? console.log("x is greater than 10") : console.log("x is smaller");
