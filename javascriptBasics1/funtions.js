function sumofn(n) {
  let sum = 0;
  console.log("4");
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
//function declaration if we use function key then it is declaration
let result = sumofn(5);
console.log(result);

const greet = () => {
  console.log("hi");
};
greet();
//function functionname(){}
// const/let functionname=()=>{}

const consolelogFunc = () => {
  return "this will just return what ever we wANT";
};

console.log(consolelogFunc()); //this is how we will call
