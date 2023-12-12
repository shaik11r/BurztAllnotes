let array = [1, 2, 3, 4, 5];
console.log(array);

//to add some elements we will do push
array.push(6);
console.log(array);
//when we use push element will be added at last
array.pop();
console.log(array);
//remove the last element from the array
array.shift();
console.log(array);
//shift will remove the first element form the array

array.unshift(44);
console.log(array);
//unshift it will add at start of the array
array.unshift(44, 77, 999);
console.log(array);

let str = "hello";
const arr = str.split("");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
