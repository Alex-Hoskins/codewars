// //Array of potential ways to win.
// let winningStrings=[
//     [0,1,2],
//     [4,5,6],
//     [8,9,10],
//     [0,4,8],
//     [1,5,9],
//     [2,6,10],
//     [0,5,10],
//     [2,5,8]
// ]

// //TicTacToe function that will loop through winningStrings. It is comparing the string with each array in winningString by index. For example, winningString[0] could represent three X's or three O's on the top row of a tic-tac-toe board. The function will check if there is a complete match first, in which case it will return [0,0]. If there is not already a winner it will check and see how many potential ways to win there are for player X and player O in one move.

// var ticTacToe=function(string){
//     let waysToWinX=0
//     let waysToWinO=0
//     for(let i = 0; i <winningStrings.length;i++){
//         if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]=='X'){
//             return [0,0]
//         }
//         if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]=='O'){
//             return [0,0]
//         }
//         if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]==' '){
//             waysToWinX++
//         }
//         if(string[winningStrings[i][0]]==' ' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]=='X'){
//             waysToWinX++
//         }
//         if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]==' ' && string[winningStrings[i][2]]=='X'){
//             console.log('hello')
//             waysToWinX++
//         }
//         if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]==' '){
//             waysToWinO++
//         }
//         if(string[winningStrings[i][0]]==' ' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]=='O'){
//             waysToWinO++
//         }
//         if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]==' ' && string[winningStrings[i][2]]=='O'){
//             waysToWinO++
//         }
//     }
//     return([waysToWinX,waysToWinO])
// }

// console.log(ticTacToe("X X\n OO\nXOO"))


// let dash = {
//     name:'dash',
//     time:'2:07:16'
// }
// let bullseye = {
//     name:'bullseye',
//     time:'2:08:16'
// }
// let Samuel = {
//     name:'Samuel',
//     time:'05:42:14'
// }
// let Fred = {
//     name:'Fred',
//     time:'05:12:53'
// }
// let Cynthia = {
//     name:'Cynthia',
//     time:'dnf'
// }

// var winner = function(horseArray){
//     let winner = ''
//     let winnerHours = Infinity
//     let winnerMinutes = Infinity
//     let winnerSeconds = Infinity
//     let loser = ''
//     let loserHours = Infinity
//     let loserMinutes = Infinity
//     let loserSeconds = Infinity
//     let dnfCount = 0
//     for(let i = 0; i<horseArray.length; i++){
//         if(horseArray[i].time=='dnf'){
//             dnfCount++
//         }else{
//             let timeArray = horseArray[i].time.replace('hrs', '', horseArray[i].time).split(':')
//             timeArray[0] = parseInt(timeArray[0])
//             timeArray[1] = parseInt(timeArray[1])
//             timeArray[2] = parseInt(timeArray[2])
//             if(timeArray[0]<winnerHours){
//                 loserHours = winnerHours
//                 loserMinutes = winnerMinutes
//                 loserSeconds = winnerSeconds
//                 loser = winner
//                 winnerHours = timeArray[0]
//                 winnerMinutes = timeArray[1]
//                 winnerSeconds = timeArray[2]
//                 winner = horseArray[i].name
//             }
//             else if(timeArray[0]<=winnerHours && timeArray[1]<winnerMinutes){
//                 loserHours = winnerHours
//                 loserMinutes = winnerMinutes
//                 loserSeconds = winnerSeconds
//                 loser = winner
//                 winnerHours = timeArray[0]
//                 winnerMinutes = timeArray[1]
//                 winnerSeconds = timeArray[2]
//                 winner = horseArray[i].name
//             }
//             else if(timeArray[0]<=winnerHours && timeArray[1]<=winnerMinutes && timeArray[2]<winnerSeconds){
//                 loserHours = winnerHours
//                 loserMinutes = winnerMinutes
//                 loserSeconds = winnerSeconds
//                 loser = winner
//                 winnerHours = timeArray[0]
//                 winnerMinutes = timeArray[1]
//                 winnerSeconds = timeArray[2]
//                 winner = horseArray[i].name
//             }else if(timeArray[0]<loserHours){
//                 loserHours = timeArray[0]
//                 loserMinutes = timeArray[1]
//                 loserSeconds = timeArray[2]  
//                 loser = horseArray[i].name 
//             }
//             else if(timeArray[0]<=loserHours && timeArray[1]<loserMinutes){
//                 loserHours = timeArray[0]
//                 loserMinutes = timeArray[1]
//                 loserSeconds = timeArray[2]  
//                 loser = horseArray[i].name 
//             }
//             else if(timeArray[0]<=loserHours && timeArray[1]<=loserMinutes && timeArray[2]<loserSeconds){
//                 loserHours = timeArray[0]
//                 loserMinutes = timeArray[1]
//                 loserSeconds = timeArray[2]   
//                 loser = horseArray[i].name 
//             }
//         }
//     }
//     let seconds = 0
//     let minutes = 0
//     if(loserSeconds-winnerSeconds<0){
//         seconds=60+loserSeconds-winnerSeconds
//         minutes--
//     }else{
//         seconds= loserSeconds-winnerSeconds
//     }
//     if(loserMinutes-winnerMinutes<0){
//         minutes=minutes + 60+loserMinutes-winnerMinutes
//         hours--
//     }else{
//         minutes=minutes +loserMinutes-winnerMinutes
//     }

//     if(horseArray.length===dnfCount){
//         return 'There is no winner'
//     }
//     if(horseArray.length-1===dnfCount){
//         return `${winner} won by no contest`
//     }
//     return `${winner} won by ${loserHours-winnerHours} hours, ${minutes} minutes, and ${seconds} seconds`
// }

// console.log(winner([Samuel, Cynthia, Fred]))
// console.log(winner([Cynthia, Cynthia, Cynthia]))
// console.log(winner([Cynthia, Fred, Cynthia]))

//This function takes an array and iterates through each index. We will create a hashmap called totalMap that will store the indexes of median values. The key in totalMap will be the value at each array index. The value of each key within totalMap will be the inital array index. After we have all keys for totalMap we will sort the keys. With the sorted keys we know the order of the array we would like to return.

var medianSort = function(array){
    let totalMap = {}
    let k=0
    for(let i = 0; i <array.length;i++){
        if(array[i].length>1){
            array[i]=array[i].sort((a, b) => { return a-b} )
            let median = 0
            if(array[i].length%2==0){
                let middleEven = array[i].length/2
                median = ((array[i][middleEven]-array[i][middleEven-1])/2)+array[i][middleEven-1]

            }else{
                let middleOdd=Math.floor(array[i].length/2)
                median= array[i][middleOdd]
            }
            totalMap[median]=k
            k++
            
        }else{
            totalMap[array[i]]=k
            k++
        } 
    }
    let sortedKeys=Object.keys(totalMap).sort((a, b) => { return a-b} )
    let newArray = []
    for(let i = 0; i<sortedKeys.length;i++){
        newArray.push(array[totalMap[sortedKeys[i]]])
    }
    return newArray
   
}

console.log(medianSort([3, [1,-2],1]))
console.log(medianSort([[12, 9, 1, 25], 4]))
console.log(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]))