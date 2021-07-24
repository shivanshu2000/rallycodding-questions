// Strings as Operators
// You are given an array of integers and a string representing a "conditional" as arguments. Return a new array of integers where every element passes the conditional test provided by the string.

// Only the symbols >, <, <=, >=, and == will be used.

// Requirements
// Must return an array of integers
// Example #1
// solve([1,2,3,4,5], "<3")
// > [1,2]
// *All integers less than 3 are returned in the array.

// Example #2
// solve([1,2,3,4,5,3], "==3")
// > [3,3]
// Only integers equal to 3 are returned in the array.

// Example #3
// solve([1,2,3,4,5], ">=4")
// > [4,5]

const solve = (intArray, test) => {
    const num = test[test.length - 1]*1;
    const e = test.replace(test[test.length-1],'')
    intArray.sort((a,b)=> a-b);
    
    let array=[]
    
    if(e==='>'){
      array = [...new Set(intArray.filter(n => n>num))]
    }
    
    if(e==='<'){
      array = [...new Set(intArray.filter(n => n<num))]
    }
    
    if(e==='<='){
      array = [...new Set(intArray.filter(n => n<=num))]
    }
    
    if(e==='>='){
      array = [...new Set(intArray.filter(n => n>=num))]
    }
    
    if(e==='=='){
      array = intArray.filter(n => n===num)
    }
    return array;
  };
  