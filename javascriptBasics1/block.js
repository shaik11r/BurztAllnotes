const funt = () => {
  let y = 100;
  console.log(y);
  //y is limited to fun function block scoped
};
funt(); //calling the function
//
if (true) {
  const z = 1000;
  console.log(z);
}
{
  let x = 10;
  console.log(x);
}

// console.log(z);
