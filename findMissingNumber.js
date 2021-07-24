// Find the Missing Number
// You are given an unsorted array of integers as an argument. When sorted, the numbers in the array will form a sequence. One number in the sequence is missing. Return the missing number.

// Requirements
// Must return a single integer.
// Number returned must be between the 0th and Kth index of the given array when sorted.
// Must also work with negative integers
// Example 1
// solve([5, 0, 2, 1, 3])
// > 4

const solve = (intArray) => {
    let negatives = false
    const newArray = intArray.map(n=>{
      if(n<0){
        negatives = true
        return -1*n
      }
        
      return n
    })
    newArray.sort(function(a,b){
      return a-b;
    })
    
    const sum = newArray.reduce((a,b)=>a+b,0)
    const  max = newArray.reduce(function(a, b) {
      return Math.max(a, b);
  });
    
    const min = newArray.reduce(function(a, b) {
      return Math.min(a, b);
  });
    
    let actualSum=0;
    for(let i=min; i<=max;i++){
      actualSum += i
    }
    
    const missingNumber = negatives ? -1*(actualSum-sum): actualSum-sum
    return missingNumber
  };
  