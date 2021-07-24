// Balanced Parenthesis
// You are given a string containing only parenthesis as an argument. Return true if all of the parenthesis have matching or closing parenthesis.

// Requirements
// Must return either true or false
// Example #1
// solve("()")
// > true

const solve = (strArg) => {
  
    const left = strArg.split('(').filter(n=> n==="").length
    
    const right= strArg.split(')').filter(n=> n==="").length
    
    return left === right;
  };
  