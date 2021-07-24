// You are given an array containing some repeated integers as an argument. Sum all of the identical integers, then return an array containing the unique integers and the sum sorted in ascending order.

// Requirements
// Must return an array of integers
// Must work with negative integers
// Example #1
// solve([5,5,5,5,21])
// > [20, 21]

const solve = (intArray) => {
  
    const unique = [...new Set(intArray)]
    const array = []
    let temp = []
    
    for(i = 0; i<unique.length;i++){
      temp = intArray.filter(n=> n===unique[i])
      array.push(temp.reduce((a,b)=> a+b))
      temp = []
    }
    
    return array.sort((a,b)=> a-b);
  }; 