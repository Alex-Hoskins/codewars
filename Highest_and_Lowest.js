/*
Will it always be a string with spaces?
Will the numbers be whole or have floating points?
Do you want the return to be an array, string, numbers?
highAndLow('1 2 3 -4 5') return '5 -4'

Split numbers individualls
Sort / loop through for values
reform values into appropriate output
*/

function highAndLow(numbers){
    let splitNumbers = numbers.split(' ')
    splitNumbers.sort((a,b)=>{return a-b})
    return `${splitNumbers[splitNumbers.length-1]} ${splitNumbers[0]}`
}

//   function highAndLow(numbers){
//     let splitNumbers = numbers.split(' ')
//     return `${Math.max(...splitNumbers)} ${Math.min(...splitNumbers)}`
//   }

//   function highAndLow(numbers){
//     let splitNumbers = numbers.split(' ')
//     let high = -10000000
//     let low = 1000000
//     for(let i = 0; i < splitNumbers.length; i++){
//       let number = parseInt(splitNumbers[i])
//       if(number > high){
//         high = number
//         console.log('high')
//       }
//       if(number< low){
//         low = number
//         console.log('low')
//       }
//     }
//     return `${high} ${low}`
//   }