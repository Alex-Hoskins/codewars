// QUESTION: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


// PARAMETER
// Can the array consist of any data type?
// RETURN
// Will their be string and number zeros and do they both get pushed to the end?
// EXAMPLE
// moveZeros([0,1,2,3,4,'0'])// returns [1,2,3,4,0,'0']
// PSEUDOCODE
// For loop iterating over array
// Check for 0 or '0'
// push zeros to the end of the array
// Adjust order
// return arr

function moveZeros(arr) {

  let pointer = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[pointer]===0){
      let arri = arr.splice(pointer,1)
      arr.push(arri[0])
      pointer--
    }
    pointer++
  }
  console.log(arr)
  return arr
}