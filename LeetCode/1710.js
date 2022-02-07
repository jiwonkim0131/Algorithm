const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let k = 0,
    i = 0,
    units = 0;

  while (i < boxTypes.length) {
    if (k + boxTypes[i][0] < truckSize) {
      k += boxTypes[i][0];
      units += boxTypes[i][0] * boxTypes[i][1];
      i++;
    } else {
      units += (truckSize - k) * boxTypes[i][1];
      break;
    }
  }
  return units;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
