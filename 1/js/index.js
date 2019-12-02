const text = require("fs").readFileSync("../input.txt").toString('utf-8');

const calculateFuel = (mass) => {
  const fuel = Math.max(Math.floor(mass / 3) - 2, 0);
  return fuel + (fuel > 0 ? calculateFuel(fuel) : 0);
}

const final = text
  .split("\n")
  .map(inputModule => calculateFuel(Number(inputModule)))
  .reduce((fuelTotal,inputModule) => fuelTotal + inputModule, 0);

console.log(final); 