// You are given an array of integers as an argument. Sort the array from lowest to highest based on the value of the integer's square.

// Requirements
// Example #1
// solve([-1, 2, -5, 0])
// > [0, -1, 2, -5]

const solve = (intArray) => {
    return intArray.sort((a,b)=>a*a - b*b);
  };