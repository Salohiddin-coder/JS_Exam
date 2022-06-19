function countTrue(array) {
  const countTrues = [];
  for (let i = 0; i < array.length; i++) {
      if (array[i] === true) {
          countTrues.push(array[i]);
      }
  }
  return countTrues;
}

console.log(countTrue([true, false, false, true, true]));