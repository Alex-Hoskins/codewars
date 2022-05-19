/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

PARAMETERS
So I don't need to worry about numbers, exclamation points, other characters?
RETURN
Do you just want me to return one number - a sum of all the vowels?
EXAMPLES
getCount('a') would equal 1
PSEUDOCODE
1) Iterate through the string
2) If index equals aeiou then add one to count
*/

function getCount(str) {
    let vowelsCount = 0;
    let regex = /[aeiou]/;
    for(let i = 0; i < str.length;i++){
        if(str[i].match(regex)){
            vowelsCount++
        }
    }
    return vowelsCount;
  }

// console.log(getCount('a'))