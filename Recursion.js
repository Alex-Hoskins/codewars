console.log('Recursion')
// Doing one task a bunch of times until you get to the desired solution
// A process (a fucntion in our case) that calls itself
// Why do we need to know it?
// We use it all the time. It's EVERYWHERE!
// Call Stack, the order the code is stepped through. Think of a stack of papers.
// Recursive functions keep adding calls to the call stack
// Two things for a recusive function.
// We need to know when the call stack stops - base case.
// Base case - when the recursion stops
// Different input

function sumNum(num){
    if(num===1){
        return num
    }
    return num + sumNum(num-1)
}
console.log(sumNum(3))

function recFact(num){
    if(num === 1){
        return 1
    }
    return num * recFact(num-1)
}
console.log(recFact(5))

//pitfalls - no base or incorrect return or stackoverflow
// helper function recursion - outer function is not recursive with an inner helper function that is recursive