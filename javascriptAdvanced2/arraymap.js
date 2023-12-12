let array = [1, 2, 3, 4, 5, 6, 7];
const square = (n) => {
  return n * n;
};
const addTentoeveryelement = (n) => {
  return n + 10;
};
for (let i = 0; i < array.length; i++) {
  console.log(square(array[i]));
}
// console.log(array.map(square));
// console.log(array.map(addTentoeveryelement));
// console.log(
//   array.map((n) => {
//     return n * n;
//   })
// );
array.map((n) => {
  return n + 10;
});

const greet = () => {
  console.log("hello");
};

const greater = (n) => {
  return n > 3;
};
const array2 = array.filter(greater);
console.log(array2);
//Returns the elements of an array that meet the condition specified in a callback function.
const array3 = array.filter((val) => {
  return val == 3;
});
console.log(array3);

const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(
  numbers.find((ele) => {
    return ele === 10;
  })
);
const evenNum = numbers.filter((val) => {
  return val % 3 === 0;
});
console.log(evenNum);
const oddNum = numbers.filter((val) => {
  return val % 2 !== 0;
});
console.log(oddNum);
const greaterthan5 = numbers.filter((val) => val > 5);
console.log(greaterthan5);
console.log(numbers);

console.log(
  numbers.find((val) => {
    return val % 3 === 0;
  })
);
const newarrayof = numbers.filter((val) => {
  return val > 5;
});
console.log(newarrayof);

const filterfunction = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      console.log(array[i]);
    }
  }
};
filterfunction(array, (val) => {
  return val > 5;
});
const mapfunction = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    console.log("mapvalue: ", callback(array[i]));
  }
};
mapfunction(array, (val) => {
  return val * val;
});