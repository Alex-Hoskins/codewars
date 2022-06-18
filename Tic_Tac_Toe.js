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

let winningStrings=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
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

var tictactoeString=function(string){
    let waysToWinX=0
    let waysToWinO=0
    for(let i = 0; i <winningStrings.length;i++){
        if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]=='e'){
            waysToWinX++
        }
        if(string[winningStrings[i][0]]=='e' && string[winningStrings[i][1]]=='X' && string[winningStrings[i][2]]=='X'){
            waysToWinX++
        }
        if(string[winningStrings[i][0]]=='X' && string[winningStrings[i][1]]=='e' && string[winningStrings[i][2]]=='X'){
            waysToWinX++
        }
        if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]=='e'){
            waysToWinO++
        }
        if(string[winningStrings[i][0]]=='e' && string[winningStrings[i][1]]=='O' && string[winningStrings[i][2]]=='O'){
            waysToWinO++
        }
        if(string[winningStrings[i][0]]=='O' && string[winningStrings[i][1]]=='e' && string[winningStrings[i][2]]=='O'){
            waysToWinO++
        }
    }
    return([waysToWinX,waysToWinO])
}

console.log(tictactoeString('eeXOeeOeX'))
console.log(tictactoeString('XeXOOeeeX'))
console.log(tictactoeString('OeOeXeXee'))