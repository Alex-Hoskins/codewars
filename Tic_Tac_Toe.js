// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
// Parameters
// An array of arrays
// Returns
// A, Draw or pending as a String
// Example
// tictactoe([ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ])// "A"
// Array representing tic tac toe board intitialized as empty with empty string place holders
// Iterate and track moves on empty board
// Alternate between A/B
// Have list of winning arrays

let winningArrays = [
    [
        [0,0],[0,1],[0,2]
    ],
    [
        [1,0],[1,1], [1,2]
    ],
    [
        [2,0],[2,1],[2,2]
    ],
    [
        [0,0],[1,0],[2,0]
    ],
    [
        [0,1],[1,1],[2,1]
    ],
    [
        [0,2],[1,2],[2,2]
    ],
    [
        [0,0],[1,1],[2,2]
    ],
    [
        [0,2],[1,1],[2,0]
    ]
]


var moveBoard = function(board, move, player){
    board[move[0]][move[1]]=player
    return board
}

let checkWinner = function(board){
    for(let i = 0; i < winningArrays.length;i++){
        let winner = true
        let player = ''
        for(let j = 0; j<3;j++){
            if(!player){
                player = board[winningArrays[i][j][0]][winningArrays[i][j][1]]
            }
            if(board[winningArrays[i][j][0]][winningArrays[i][j][1]] !== player || board[winningArrays[i][j][0]][winningArrays[i][j][1]]== ''){
                winner = false
            }
        }
        if(winner){
        return player
        }
    }
    
    return false
}

var tictactoe = function(moves) {
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    let player = 'A'
    for(let i = 0; i < moves.length; i++){
        board = moveBoard(board,moves[i], player)
        if(player == 'A'){
            player = 'B'
        }else{
            player = 'A'
        }
        if(checkWinner(board)){
            return checkWinner(board)
        }
    }
    if(moves.length == 9){
        return 'draw'
    }
    return 'pending'
};

// console.log(tictactoe([ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 2, 1 ], [ 0, 2 ] ]))
// console.log(tictactoe([ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ]))
// console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))
// console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]))

let winningStrings=[
    [0,1,2],
    [4,5,6],
    [8,9,10],
    [0,4,8],
    [1,5,9],
    [2,6,10],
    [0,5,10],
    [2,5,8]
]

var tictactoeString=function(string){
    let waysToWinX=0
    let waysToWinO=0
    for(let i = 0; i <winningStrings.length;i++){
        if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]==' '){
            waysToWinX++
        }
        if(string[winningStrings[i][0]]==' ' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]=='X'){
            waysToWinX++
        }
        if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]==' ' && string[winningStrings[i][2]]=='X'){
            console.log('hello')
            waysToWinX++
        }
        if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]==' '){
            waysToWinO++
        }
        if(string[winningStrings[i][0]]==' ' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]=='O'){
            waysToWinO++
        }
        if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]==' ' && string[winningStrings[i][2]]=='O'){
            waysToWinO++
        }
    }
    return([waysToWinX,waysToWinO])
}

// console.log(tictactoeString("X X\n OO\nXOO"))


var arrayRecursion=function(){

}

var medianSort = function(array){
    let totalMap = {}
    let k=0
    for(let i = 0; i <array.length;i++){
        let newValues= arrayRecursion(array,i,totalMap,k)
        totalMap = newValues[0]
        k= newValues[1]
    }
    
    let median = Math.floor(k/2)
    console.log('median=',median, 'k=',k)
    return totalMap[median]
}
var arrayRecursion=function(array,i,totalMap,k){
    if(array[i].length>1){
        for(let j = 0;j<array[i].length;j++){
            if(array[i][j].length>1){
                let newValues= arrayRecursion(array[i],j,totalMap,k)
                totalMap = newValues[0]
                k= newValues[1]
            }else{
            totalMap[k]=k
            k++
            }
        }
    }else{
        totalMap[k]=k
        k++
        return [totalMap,k]
    }  
    return [totalMap,k]
}

// console.log(medianSort([0,1,2,3,4,5,6,[7,8],9,[10,11],12,13,14,15,16,17,18,[19,[20,21,22,[23,[24]]],[25,26]]]))
// console.log(medianSort([0,1,2,3,4,5,6,[7,8],9,[10,11]]))
// console.log(medianSort([0,1,2,3,4,5,6,[[7,8],9],10,11]))

var mixedPotions = function(potions){
    let potion = {}
    for(let i =0;i<potions.length;i++){
        for(key in potions[i]){
            if(!potion[key]){
                potion[key]=0
            }
            potion[key]+=potions[i][key]
        }
    }
    return potion
}
let invisibility = {
    unicornhair:10,
    gremlinshoes:2
}
let flight = {
    unicornhair:10,
    gremlinshoes:2,
    fairydust:3
}
let love = {
    cupidscloak:4,
    fairydust:1
}

// console.log(mixedPotions([flight,invisibility,flight, love, love]))

let dash = {
    name:'dash',
    time:'2:07:16hrs'
}
let bullseye = {
    name:'bullseye',
    time:'2:08:16hrs'
}
let chirp = {
    name:'chirp',
    time:'1:00:12hrs'
}
let mac = {
    name:'mac',
    time:'0:59:16hrs'
}
let zero = {
    name:'zero',
    time:'0:40:16hrs'
}

var winner = function(horseArray){
    let winner = ''
    let winnerHours = Infinity
    let winnerMinutes = Infinity
    let winnerSeconds = Infinity
    let loser = ''
    let loserHours = Infinity
    let loserMinutes = Infinity
    let loserSeconds = Infinity
    for(let i = 0; i<horseArray.length; i++){
        let timeArray = horseArray[i].time.replace('hrs', '', horseArray[i].time).split(':')
        timeArray[0] = parseInt(timeArray[0])
        timeArray[1] = parseInt(timeArray[1])
        timeArray[2] = parseInt(timeArray[2])
        console.log(timeArray[0])
        if(timeArray[0]<winnerHours){
            loserHours = winnerHours
            loserMinutes = winnerMinutes
            loserSeconds = winnerSeconds
            loser = winner
            winnerHours = timeArray[0]
            winnerMinutes = timeArray[1]
            winnerSeconds = timeArray[2]
            winner = horseArray[i].name
        }
        else if(timeArray[0]<=winnerHours && timeArray[1]<winnerMinutes){
            loserHours = winnerHours
            loserMinutes = winnerMinutes
            loserSeconds = winnerSeconds
            loser = winner
            winnerHours = timeArray[0]
            winnerMinutes = timeArray[1]
            winnerSeconds = timeArray[2]
            winner = horseArray[i].name
        }
        else if(timeArray[0]<=winnerHours && timeArray[1]<=winnerMinutes && timeArray[2]<winnerSeconds){
            loserHours = winnerHours
            loserMinutes = winnerMinutes
            loserSeconds = winnerSeconds
            loser = winner
            winnerHours = timeArray[0]
            winnerMinutes = timeArray[1]
            winnerSeconds = timeArray[2]
            winner = horseArray[i].name
        }else if(timeArray[0]<loserHours){
            console.log(timeArray[0],loserHours)
            console.log('you made it')
            loserHours = timeArray[0]
            loserMinutes = timeArray[1]
            loserSeconds = timeArray[2]  
            loser = horseArray[i].name 
        }
        else if(timeArray[0]<=loserHours && timeArray[1]<loserMinutes){
            console.log('you made it')
            loserHours = timeArray[0]
            loserMinutes = timeArray[1]
            loserSeconds = timeArray[2]  
            loser = horseArray[i].name 
        }
        else if(timeArray[0]<=loserHours && timeArray[1]<=loserMinutes && timeArray[2]<loserSeconds){
            loserHours = timeArray[0]
            loserMinutes = timeArray[1]
            loserSeconds = timeArray[2]   
            loser = horseArray[i].name 
        }
    }

    return `The winner is ${winner} and he beat ${loser} by ${loserHours-winnerHours} hours ${loserMinutes-winnerMinutes} minutes, and ${loserSeconds-winnerSeconds} seconds`
}

// console.log(winner([dash, bullseye, chirp]))