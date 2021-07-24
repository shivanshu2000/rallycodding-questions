// Swap Upper and Lower Case Characters in a String
// You are given a string containing both upper case and lower case characters as an argument. Swap the casing of all characters and return the resulting string.

// Requirements
// Must return a string
// Must work with special characters like punctuation
// Example #1
// solve('Hi Alex, will I see you in May?')
// > 'hI aLEX, WILL i SEE YOU IN mAY?'

const solve = (strArg) => {
  
    let array=[]
    
    for( i =0;i<strArg.length;i++){
      if(strArg[i] === strArg[i].toUpperCase()
          && strArg[i] !== strArg[i].toLowerCase()){
         array.push(strArg[i].toLowerCase())
        }  
      
       else if(strArg[i] !== strArg[i].toUpperCase()
          && strArg[i] === strArg[i].toLowerCase()){
         array.push(strArg[i].toUpperCase())
        }else{
          array.push(strArg[i])
        }  
    }
    
    return array.join('');
  };
  