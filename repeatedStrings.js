// Find String in Array That is Repeated an Odd Number of Times
// You are given an array of lowercase single word strings containing some duplicates as an argument. Return the string that is duplicated an odd number of times.

// The argument array will only ever have one string that matches this criteria.

// Requirements
// Must return a single string
// Example #1
// solve(['apple', 'orange', 'banana', 'apple', 'apple', 'orange', 'banana'] )
// > "apple"

const solve = (strArg) => {
    let counter =0 
    let item
    for(i=0;i<strArg.length-2;i++){
      for(j=0;j<strArg.length;j++){
        if(strArg[i] === strArg[j]){
          counter +=1
        }
      }
      if(counter % 2 !==0 ){
        item = strArg[i]
        break;
      }
      counter  = 0
    }
    
    return item;
  };
  