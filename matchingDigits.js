// Matching Digits from Two Integers
// You are given two non-negative integers as an argument. Return an array of integers containing the matching digits from the two integers.

// Requirements
// Must return an array of integers
// Example #1
// solve(3762, 72996)
// > [7,6,2]
// Example #2
// solve(1456, 172496)
// > [1,4,6]

const solve = (intOne, intTwo) => {
   
    const array = []
    
    for(i=0; i< (intOne+'').length; i++){
      if((intTwo + '').includes((intOne+ '')[i])){
        array.push((intOne+'')[i]*1)
      }
    }
    return array;
  };
  