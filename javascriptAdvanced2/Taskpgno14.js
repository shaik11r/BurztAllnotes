let array = [0, -40, 100];
const dummyFuntion = (array) => {
  const array2 = array.map((val) => {
    return (val * 9) / 5 + 32;
  });
  console.log(array2);
};
dummyFuntion(array);

let arr2 = [0, 100];
const dummyFuntion2 = (arr2) => {
  const arrofobjs = arr2.map((val) => {
    let obj = {
      c: val,
      f: (val * 9) / 5 + 32,
    };
    return obj;
  });
  console.log(arrofobjs);
};
dummyFuntion2(arr2);
