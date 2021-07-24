// Array as a Single Integer
// You are given an array of single-digit integers that represents a number and an integer K as arguments. Add the integer K to this "number" and return the result as an array of single digit integers.

// Requirements
// Must return an array of integers
// Example #1
// solve([9, 8, 7, 6], 39 )
// > [9, 9, 1, 5]
// We add 39 to 9876 which gives us 9915, so we return this integer as \[9,9,1,5]

const solve = (intArray, int) => {
  
    const sum = intArray.join('')*1 + int
    const array = (sum+'').split('').map(n => n*1)
     return array;
  };
  