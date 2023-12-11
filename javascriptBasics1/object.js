/**
 * objects are collections of key value pair
 * val:'a'
 * {
 *
 * }
 */
const person = {
  name: "jhon",
  age: 25,
  city: "hyd",
  phone: {
    phonenumber1: 839383983,
    phonenumber2: 489328989,
  },
  array: [10, 20, 30, 50],
};
// console.log(person.phone.phonenumber1);
// console.log(person.array[array.length - 1]);
// console.log(person.array[person.array.length - 1]);

const student = {
  name: "abc",
  age: 23,
  courses: [
    { courseName: "javascript", courseCredits: 4 },
    { courseName: "nodejs", courseCredits: 5 },
  ],
};

console.log(student);
console.log(student.courses);
console.log(student.courses[0]);
console.log(student.courses[1]);

console.log(student.courses[1].courseName);

console.log(`hello ${student.name}`);
console.log("hello ${student.name}");
console.log("hello");
console.log(`hi hello ${student.age}`);
