// Find the Character That Doesn't Belong
// You are given two lowercase single word strings as arguments. The strings are identical except one has a random character inserted. Return the random inserted character.

// Requirements
// Must return a single character string
// Example #1
// solve("flooding", "floodring")
// > "r"

const solve = (strOne, strTwo) => {
  
    const a = strOne.split('')
    const b = strTwo.split('')
    
    let letter = a[0]
    for(i=0; i<a.length; i++){
        if(a[i] !== b[i]){
          letter = a.length > b.length ?  a[i] : b[i]
          break;
      }
    }
    return letter;
  };
  