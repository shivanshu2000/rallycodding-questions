// Move Zeroes to the End
// You are given an array of integers containing some zeros as an argument. Return a new array that contains all the elements of the original, but with all of the zero values moved to the right hand side of the array.

// Requirements
// Must return an array of integers
// Example #1
// solve([0, 1, 0, 2, 0])
// > [1, 2, 0, 0, 0]

const solve = (intArray) => {
  
    const zeroes = intArray.filter(n=> n===0)
    const rest = intArray.filter(n=> n!==0)
    return rest.concat(zeroes);
  };
  