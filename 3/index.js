import input from './input';
const getInput = () => {
  const instructionSets = input.split('\n');
  return instructionSets;
};
const evaluateWireMeasurement = measurementSet => {
  let pos = [0, 0];
  let mvts = measurementSet.split(',');
  let steps = [];
  mvts.forEach((mvt, index) => {
    const dir = mvt.slice(0, 1);
    const dist = Number(mvt.slice(1));
    let i = 0;
    switch (dir) {
      case 'R':
        while (i < dist) {
          pos[0] += 1;
          steps.push(pos.toString());
          i++;
        }
        break;
      case 'L':
        while (i < dist) {
          pos[0] -= 1;
          steps.push(pos.toString());
          i++;
        }
        break;
      case 'D':
        while (i < dist) {
          pos[1] -= 1;
          steps.push(pos.toString());
          i++;
        }
        break;
      case 'U':
        while (i < dist) {
          pos[1] += 1;
          steps.push(pos.toString());
          i++;
        }
        break;
    }
  });
  return steps;
};
const intersection = a => {
  const s = new Set(a[1]);
  return a[0].filter(x => s.has(x));
};
const calculateMinimumDirectDistance = positionLists => {
  let ints = intersection(positionLists);
  let minDist = null;
  for (let match of ints) {
    const matches = match.split(',').map(Number);
    let distance = Math.abs(matches[0]) + Math.abs(matches[1]);
    if (minDist === null || distance < minDist) {
      minDist = distance;
    }
  }
  return minDist;
};
const calculateMinimumWirePathDistance = positionLists => {
  const ints = intersection(positionLists);
  let minDist = null;
  ints.forEach(match => {
    let distance =
      Number(indexOfAll(positionLists[0], match)) +
      Number(indexOfAll(positionLists[1], match)) +
      2;
    if (minDist === null || distance < minDist) {
      minDist = distance;
    }
  });
  return minDist;
};
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
export default {
  part1: () =>
    calculateMinimumDirectDistance(
      getInput().map(n => evaluateWireMeasurement(n))
    ),
  part2: () =>
    calculateMinimumWirePathDistance(
      getInput().map(n => evaluateWireMeasurement(n))
    )
};