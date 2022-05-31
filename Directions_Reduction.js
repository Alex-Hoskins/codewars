// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].


// PARAMATERS
// An array of directions s, n, e, w.
// RETURN
// Simplified directions in an array.
// Do they only cancel if they are directly next to one another?
// EXAMPLE
// dirReduc(["NORTH","SOUTH", "WEST"])// returns ["WEST"]

function opposites(first,second){
    if(first == 'NORTH' && second == 'SOUTH'){
      return true
    }else if( first == 'SOUTH' && second == 'NORTH'){
      return true
    }else if( first == 'EAST' && second == 'WEST'){
      return true
    }else if( first == 'WEST' && second == 'EAST'){
      return true
    }
    return false
  }
  
  function dirReduc(arr){
    // Iterate through the array with a for loop
    for(let i = 0; i < arr.length; i++){
    // Check if two indexes are opposite one another
    // Function that checks for opposites
      let first = arr[i]
      let second = arr[i+1]
      if(opposites(first,second)){
        // if they are then splice both indexes
        arr.splice(i,2)
        // Adjust index pointer
        i=-1
      }
    }
    // return reduced array
    return arr
  }