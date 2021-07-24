// Array of Strings From a Pattern
// You are given a string containing single digit integers followed by one more letters as an argument. Interpret the string as a pattern. The integer leading the character will determine how many times that character or series of characters should be repeated as a string. Return an array of strings as specified by the "pattern."

// Requirements
// Must return an array of strings
// Example #1
// solve("3a2z3c")
// > ["a", "a", "a", "z", "z", "c", "c", "c"]

const solve = (strArg) => {
  
    let strings = []
    let num = []
    
    for(i=0;i<strArg.length;i++){
      if(!parseInt(strArg[i]) === false){
        num.push(strArg[i]*1)
        strArg=strArg.replace(strArg[i], ' ')
      }
    }
    
    strings = strArg.trim().split(' ')
    
    let final =[]
    
    for(i=0;i<num.length;i++){
      for(j=0;j<num[i]*1;j++){
        final.push(strings[i])
      }
    }
    
    return final;
  };
  