// Password Complexity Checker
// You are given a string representing a password as an argument. Return true if the password passes the following complexity criteria:

// Must have at least 8 characters.
// Must contain upper case and lower case characters.
// Must contain at least two numbers.
// Must contain at least 2 of the following special characters !@#$%^&*()
// Requirements
// Must return either true or false
// Example #1
// solve("aaBB1234!@#")
// >true

const solve = (password) => {
  
  const string = '!@#$%^&*()'
   
   let itIs = false
    let counter = 0
    for(i=0;i<string.length;i++){
      if(password.includes(string[i])){
        counter+=1;
        if(counter===2){
          itIs=true
          break
        }
      }
      
    }
    return itIs;
  };
  