const age = prompt("enter your age ");
console.log(age == 0); //null
age > 60 ? console.log("Senior Citizen") : age < 18 ? console.log("Minor") : console.log("Adult");

if (age > 60) {
  console.log("Senior citizen");
} else if (age == 0) {
  console.log("enter the age");
} else if (age < 18) {
  console.log("Minor");
} else {
  console.log("adult");
}
