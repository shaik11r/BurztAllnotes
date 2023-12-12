//()-valid
//((()))-valid
//(-not valid false
//)-not valid
// ())
// ( into array )
// ((((

//())
const isValidParenthesis = (str) => {
  let array = [];

  for (let i = 0; i < str.length; i++) {
    console.log(array);
    if (str[i] === "(") {
      array.push(str[i]); //
    } else if (str[i] === ")") {
      //( )
      let prevElement = array.pop();
      if (prevElement == "(") {
        continue; //()-valid only
      } else {
        return false;
      }
    }
  }
  if (array.length == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isValidParenthesis("(())"));

let stack = [];
stack.push(1);
stack.push(2);
console.log(stack);//12
stack.pop();

let queue = [];
queue.push(1, 2, 3, 4);
queue.push(5);
queue.shift();
console.log(queue); //12345
queue.shift();
console.log(queue);
