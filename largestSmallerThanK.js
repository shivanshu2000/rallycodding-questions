// You are given an unsorted array of integers and an integer K as arguments. Find the largest integer in the array that is smaller than K.

// Requirements
// Must return an integer
// Example #1
// solve([4, 3, 2, 6, 10], 5)
// >4

const solve = (intArray, k) => {
    intArray.push(k);
    intArray.sort((a,b)=>a-b)
    
    const i = intArray.indexOf(k)
    return intArray[i-1];
  };
  