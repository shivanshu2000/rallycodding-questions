// You are given an array of single characters and an array of lowercase strings as arguments. Return the first string that contains all of the characters from the array of characters.

// Requirements
// Must return a string
// Example #1
// solve(['p', 'p', 'l', 'a', 'e'], ['orange', 'banana', 'apple'])
// > 'apple'
// Example #2
// solve(['p', 'p', 'l', 'a', 'e'], ['applesauce', 'orange', 'banana', 'apple'])
// > 'applesauce'

const solve = (charArray, strArray) => {
  
    let count = 0
    let string;
    const length = charArray.length
    
    for(i=0; i<strArray.length;i++){
      for(j=0;j<charArray.length;j++){
        if(strArray[i].includes(charArray[j])){
           count+=1;
        }else{
          continue;
        }
      }
      
      if(count===length){
        string = strArray[i] 
        break;
      }
      
      count = 0;
    }
    return string;
  };
  