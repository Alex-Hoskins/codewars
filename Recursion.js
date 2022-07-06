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


function merge(array1, array2){
    let i = 0
    let j = 0
    let results = []
    while(i < array1.length && j < array2.length){
        if(array1[i]<=array2[j]){
            results.push(array1[i])
            i++
        }else{
            results.push(array2[j])
            j++
        }
    }
    while(i < array1.length){
        results.push(array1[i])
        i++
    }
     while(j < array2.length){
        results.push(array2[j])
        j++
    }
    
    return results
}

console.log(merge([1,3,4,5,6,7,10],[1,2,7,8,9,11,12,13]))

function mergeSort(arr){
    if(arr.length <= 1){ return arr }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77,33,55,4,77,43,3453,44,66,7,77]))
