// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
// PARAMETERS
// Is it always a string? 
// Can any character be in the string?
// RETURN
// Will we be returning an object with a key value pair of each character?
// EXAMPLE
// count('abcde')// returns {'a':1, 'b':1, 'c':1, 'd':1, 'e':1}


function count (string) {  
    // The function code should be here
    // Instantiate an object to contain key value pairs derived from the string
    let answerObject = {}
    // Iterate over the string with a for loop
    for(let i = 0; i < string.length; i++){
    // Add characters to the object
      if(!answerObject[string[i]]){
        answerObject[string[i]]=0
      }
        answerObject[string[i]]++
    }
    
    // return the object
     return answerObject;
  }