const fs = require('fs');

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./input.txt')
})
let requiredFuelTotal = 0;

lineReader.on('line', function (line) {
  let moduleMass = Number(line);
  let requiredFuel = Math.floor(moduleMass / 3) - 2;
  let requiredFuelTally = 0;
  console.log(requiredFuel);
  while (requiredFuel > 0) {
    requiredFuelTally = requiredFuelTally + requiredFuel;
    requiredFuel = Math.floor(requiredFuel /3) - 2;
  }
  requiredFuelTotal = requiredFuelTotal + requiredFuelTally;
  console.log('sum:' + requiredFuelTotal);
})

