/**
 * Operators in js are symbols or keywords that perform some operations on operands
 *
 */
//arithmetic operators

// let a = 10;
// let b = 20;
// console.log(a + b); //addition +
// console.log(a - b); //subraction -
// console.log(a * b); //* multiplicaton
// console.log(a / b); // *Divison
// console.log(a % b); //modulus (remainder)

// //Unary operators
// console.log("a", a++); //post increment 11
// console.log(a);
// console.log("a", ++a);
// console.log("b", --b); //decrement pre
// console.log("b", b--); //decrement post

let x = 10;
let y = 2;
console.log(Math.floor(x / y)); //floor
console.log(Math.ceil(x / y)); //ceiling

console.log(x > y);
console.log(x < y);
console.log("this value", x == y);
//== it will check the 10==10
console.log(x === y); //strict checks the type also

console.log(7 >= 7);
console.log(56 <= 305);
console.log(3 == "3");
console.log(3 === "3");
