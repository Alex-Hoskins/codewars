// Parameters
// Two numbers, a and b.
// Return 
// All numbers within those two numbers that make Eureka. The sum of the number to the digit power. Is this an array?
// Example
// sumDigPow(88,90)//return [89]

function eureka(n){
    //string n, split it, and turn digits into numbers
    // Add up each digit
    // if sum of digits equals n return true
    let sum =0
    let nArray = (n + '').split('').map((i) => { return Number(i); })
    for(let i = 0; i<nArray.length;i++){
      sum += Math.pow(nArray[i], i+1)
    }
    return sum == n
    }
  
  function sumDigPow(a, b) {
    // Your code here
    let answerArray=[]
    //loop through a and b inclusive
    for(let i = a; i <= b; i++){
      // check that number with function checking Eureka status
      if(eureka(i)){
        // if true, push that number in array to be returned
        answerArray.push(i)
      }
    }
    // return array
    return answerArray
  }