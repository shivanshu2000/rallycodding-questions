// Find the K Middle Integers Between Two Integers
// You are given three integers, A,B and K as arguments. Return the K middle integers between A and B.

// Argument K will always be an odd number.

// Requirements
// Must return an array of integers
// Example #1
// solve(1,9,3)
// > [4,5,6]

// 5 is the median of 1 and 9. Since argument k is 3, we also return 4 and 6.

const solve = (a, b, k) => {
    const median = (a+b)/2
    const n = Math.floor(k/2)
    
    let array = []
    
    for(i =median-n; i<median ;i++){
      array.push(i)
    }
    
    array.push(median)
    
    for(i=median+1;i<=median + n; i++){
      array.push(i)
    }
    return array;
  };
  