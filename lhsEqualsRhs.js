// Right Side Equal to the Left
// You are given an array of integers as an argument. Return true if there is a point in the array where the sum of the left hand side would be equal to the sum of the right hand side.

// The argument array will always have an odd number of 3 or more elements.

// Requirements
// Must return true or false
// Must account for negative integers
// Example #1
// solve([5,4,3,9])
// > true

// Using 3 as the breakpoint, 5 + 4 on the left would equal 9 on the right, so we return true.

const solve = (intArray) => {
    const size = intArray.length
    let found= false
    for(i=1; i<intArray.length-1;i++){
      const leftSum = intArray.slice(0, i).reduce((a,b)=> a+b, 0);
      const rightSum= intArray.slice(i+1, size+1).reduce((a,b)=> a+b)
      if(leftSum===rightSum){
        found = true;
        break;
      }
    }
    return found;
  };
  