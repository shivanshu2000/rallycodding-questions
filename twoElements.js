// You are given an array of integers and an integer K as arguments. Return true if exactly two elements from the array will add up to the integer K, false if not.

// Requirements
// Must return either true or false
// Example #1
// solve([10,12,3,4,5], 8)
// > true

const solve = (intArray, k) => {
  
    let itIs = false
    for(i=0;i<intArray.length;i++){
      let toFind = k - intArray[i]
      if(intArray.indexOf(toFind) > 0){
        itIs = true
      }
    }
    return itIs;
  };
  