/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

PARAMETERS
Will this always be a string? 
Will it ever be a number, array, etc...
Will it ever be an empty string?
RETURNS
If it is a number, space, anything that's not a letter, we should ignore it in the return?
So a correct output will have spaces in between the numbers?
EXAMPLES
alphabetPosition('aaa') should return ('1 1 1')
alphabetPosition('a 7 b c 8 9 7') should return ('1 2 3')
PSEUDOCODE
For loop over the string
Create match regex
If character is a letter, then I will find the value of that character
add character value to a string
*/

//Answer

function alphabetPosition(text) {
    let characterValueText=''
    for(let i = 0; i<text.length; i++){
        let letter = text[i]
        let regex = /[a-zA-Z]/
       if(letter.match(regex)){
           let n = (letter==letter.toLowerCase()) ? 96 : 64
           let result= letter.charCodeAt(0)- n
           if(!characterValueText){
                characterValueText += result
           }else{
                characterValueText += ' ' + result
           }
       }  
    }
    return characterValueText;
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("a b c"))
console.log(alphabetPosition("a a a"))