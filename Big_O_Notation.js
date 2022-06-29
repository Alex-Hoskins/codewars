console.log('Big O Notation')

// What is it? Imagine we have multiple implementations of the 
// same function. How can we determine which one is best?
// We can assign labels to the code - a numeric representation.
// Why do we need it? Who cares?
// •It's important to have a precise vocabulary to talk about how our code performs
// •Useful for discussing trade-offs between different approaches
// •When. your code slows down or crashes, identifying parts of the code that inefficient
// can help us find pain points in our applications
// •It comes up in interviews!

function addUpTo1(n){
    let total = 0
    for(let i = 1; i<=n;i++){
        total += i
    }
    return total
}
function addUpTo2(n){
    return n*(n+1)/2
}
var time1=performance.now();
console.log(addUpTo1(6000000000))
var time2=performance.now();
console.log(addUpTo2(6000000000))
var time3=performance.now();
console.log(`First Time Elapsed:${(time2-time1)/1000}`)
console.log(`Second Time Elapsed:${(time3-time2)/1000}`)


//Which one addUpTo function is better? What does better mean?
// •Faster?
// •Less memory-intensive?
// •More readable?
// •Brevity?
// This comes down to the situation, but the first two are often highly valued.
// The problem with time.
// • Machines are different and even the same machines have different time for same code.
// • We are dealing with miniscule numbers.
// If not time, then what?
// Introducing... Big O
// Big O Notation is a way to formalize fuzzy counting
// f(n)=n linear 0(n) // f(n)=n^2 quadratic // f(n)=1 constant O(1)

// Simplifying Big O Expressions
// Constants Don't matter O(2n) would be O(n)
// 0(500) would be 0(1)
// 0(13n^2) would be 0(n^2 )

// Space Complexity in JS
// Most primitives (booleans, numbers, undefined, null) are constant Space
// Strings require 0(n)