// Find the Smallest Whole Number Not in Array
// You are given an array of whole numbers (integers starting at 1 that are positive) as an argument. Return the smallest whole number that is not present in the array.

// Requirements
// Must return an integer
// Example #1
// solve([10, 4, 1, 7, 6, 8, 5, 3, 4, 10])
// > 2
// Example #2
// solve([10, 2, 4, 1, 7, 6, 8, 5, 3, 4, 10])
// > 9

const solve = (intArray) => {
  
    const array = [...new Set(intArray)].sort((a,b)=> a-b)
    const max = Math.max(...array)
    let i;
    
    for(i=1;i<=max;i++){
      if(!array.includes(i)){
        i = i;
        break
      }
    }
      
    return i
  };
  