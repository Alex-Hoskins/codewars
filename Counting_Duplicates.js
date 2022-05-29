// PARAMETERS
// Will it take letters or numbers?
// Upper and lowercase letters are equal?
// RETURN
// Number of letters that show up twice.
// String or number?
// EXAMPLE
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// PSEUDO
// Create empty object to return
// Loop through string
// Add letter to object
// Iterate through object and if there is more than two then add it to the answerCount
// Return answer count

function duplicateCount(text){
    let letterObject = {}
    for(let i = 0; i < text.length; i++){
      let letter= text[i].toLowerCase()
      if(!letterObject[letter]){
        letterObject[letter]=0
      }
      letterObject[letter]++
    }
    let answerCount = 0
    for(key in letterObject){
      if (letterObject[key]>1){
        answerCount++
      }
    }
    return answerCount
  }