// You are given a string containing an unbalanced set of parenthesis as an argument. Return a new string with the parenthesis balanced.

// Requirements
// Must return a string
// Example #1
// solve("))")
// > "(())"

const solve = (strArg) => {
    let left = strArg.split('(').filter((n) => n === '').length;
    let right = strArg.split(')').filter((n) => n === '').length;
  
    const array = strArg.split('');
  
    if (!strArg.includes(')')) {
      left = left - 1;
    }
  
    if (!strArg.includes('(')) {
      right = right - 1;
    }
  
    const diff = left - right;
  
    if (diff > 0) {
      let temp = '';
      for (i = 0; i < diff; i++) {
        temp += ')';
      }
      const index = array.indexOf(')');
  
      if (index > 0) {
        array.splice(index, 0, temp);
      } else {
        console.log(index, temp, array.length);
        array[array.length] = temp;
      }
    } else if (diff < 0) {
      let temp = '';
      for (i = 0; i < -1 * diff; i++) {
        temp += '(';
      }
      const index = array.indexOf('(');
      if (index > 0) {
        array.splice(index, 0, temp);
      } else {
        array.splice(0, 0, temp);
      }
    }
    return array.join('');
  };
  
console.log(solve('()))'))  