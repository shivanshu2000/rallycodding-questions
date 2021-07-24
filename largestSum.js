// Given a list of integers and a number K, find the sequence of elements K long that results in the largest sum.

const solve = (intArray, number) => {
  
    const original = [...intArray]
    intArray.sort(function(a,b){
     return b-a            
     })
    
    let array = []
    for(i=0;i<number;i++){
      array.push(intArray[i])
    }
    
    let result = []
    
    for(i=0; i< original.length;i++){
      if(array.includes(original[i])){
        if(result.length === array.length){
          break;
        }
        result.push(original[i])
      }
    }
    
    
    return result;
  };
  