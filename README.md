# Code Wars
Here is a repository filled with daily Code Wars challenges and solutions. The purpose is to sharpen my problem solving and coding skills. Everyday I imrove my skills by solving these problems.

## Tech Used:
<img alt="JavaScript Shield" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

## Optimizations:
I am constantly refactoring my code to make it more efficient, easier to read, or both! I begin each excercise by rereading the problem and using pseudocode to come up with a solution.

## Lessons Learned
**1)** Using a regex with the match method can help you see if a string contains a certain letter, number, or substring.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

**2)** Optimize code by not unnecessarily assigning information to variables. This might be better for readability, but may slow down your code significantly when dealing with large sets of data.
<br/>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

**3)** You can seperate a sentence that is a string into individual words by using string.split(' ') method. You can pass a variety of arguments into this method. Using ' ' will seperate the string by space.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

**4)** When needing to compare or count letters where capitilization doesn't matter, you can us the toLowerCase() or toUpperCase() method making the letters equal.<br/>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

**5)** You can remove items from an array and push them to the back by using the splice method. Remember, when using splice it will return an array if you are saving it to a variable.<br/>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

**6)** You can use a hash table in order to store important key value pairs. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.<br/>https://en.wikipedia.org/wiki/Hash_table <br/>https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm

**7)** When iterating through an array and you need to go back to the beginning, you should use the value -1 if you are incrementing by one each time. For example:
>for(let i = 0; i < array.length; i++){<br/>
    i=-1<br/>
}

If you you set i equal to 0 within the for loop, then the next iteration would increment by 1 and you would start at index 1.

**8)** You can split a number into individual digits by turning the number into a string and the using the string split method. You can the change the stringed digit back into a number.<br/>https://codehandbook.org/split-number-individual-digits-using-javascript/#:~:text=JavaScript%20split%20method%20can%20be,transform%20each%20letter%20to%20Number
