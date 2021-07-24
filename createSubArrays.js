// Create a New Array of Every Kth Largest Element
// You are given an array of integers and an integer K as arguments. Return a new array containing the largest integers every K elements.

// The argument array will always have a multiple of K elements.

// Requirements
// Must return an array of integers
// Example #1
// solve([10, 9, 3, 6, 2, 8, 2, 0, 35], 3)
// > [10, 8, 35]
// The largest integer of 10, 9, 3 is 10, the largest of 6, 2, 8 is 8 and the largest of 2, 0, 35 is 35 so we return \[10,8,35]

const solve = (intArray, k) => {
  
    const array = []
    
     for(i=0; i<intArray.length-k+1;i+=k){
       array.push(Math.max(...intArray.slice(i,i+k)))
     }
    return array;
  };
  