import text from './input';

const getInput = () => text.split('\n').map(Number)

const calculateFuel = mass => {
  const fuel = Math.max(Math.floor(mass / 3) - 2, 0);
  return fuel;
};

const calculateTotalFuel = mass => {
  const fuel = calculateFuel(mass);
  return fuel + (fuel > 0 ? calculateTotalFuel(fuel) : 0);
};

const sum = (a, b) => a + b;

export default {
  part1: () =>
    getInput()
      .map(calculateFuel)
      .reduce(sum),
  part2: () =>
    getInput()
      .map(calculateTotalFuel)
      // .reduce((fuelTotal, inputModule) => fuelTotal + inputModule, 0)
      .reduce(sum)
};
