//there is a pre-existing array named dwarves

function dwarfRollCall(dwarves) {

//this will be the dwarf names & their numbers
var dwarfAndNumbersArray = []

//we need to create a loop to keep adding
//numbers and dwarf names to the dwarfAndNumbersArray
for (var n = 0; dwarves.length > n; n++ ){
  var index = n + 1
  dwarfAndNumbersArray.push(index + ". " + dwarves[n])

//now we need to join the individual strings into one string...
//we also need a space between each name and number...
//we also need to return a string, not an array:
  } return `${dwarfAndNumbersArray.join(' ')}`
}

function summonCaptainPlanet(planeteerCalls){

//an exclamation point must be added to each one
  var newCaptArray = []
    for (let nx = 0; nx < planeteerCalls.length; nx++) {
       newCaptArray.push(planeteerCalls[nx].toUpperCase + "! ")
     } return newCaptArray

}

function longPlaneteerCalls(words) {
  for (let nz = 0; words.length > nz; nz++){
    return (words[nz].length > 4)
  }
}

function findTheCheese (foods) {
  for (let ny = 0; foods.length > ny; ny++){
    if (foods[ny] === 'cheddar' || foods[ny] === 'gouda' || foods[ny] === 'camembert') {
      return foods[ny]
    }
  } return ("no cheese!")
}
