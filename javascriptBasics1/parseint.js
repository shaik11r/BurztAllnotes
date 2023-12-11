let a = "11";
console.log(typeof a);

let num = parseInt(a);
console.log(num);
console.log(typeof num);

let b = "hello";
let x = parseInt(b);

let case1 = "389888";
let z = parseInt(case1);

let case2 = "389888jjhsdf"; //after j it doesnt understand and returns 389888
let output2 = parseInt(case2);
console.log(output2);

let case3 = "22h474747"; //h is not a number and it will parse upto 22 and see h it wont understand then it will stop exection and return 22;
let output3 = parseInt(case3);
console.log(output3);

console.log(x);
//undefined
//null
//NaN
