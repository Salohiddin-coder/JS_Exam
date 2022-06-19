function zeroEnd(array) {
  let zeroCount = 0;  
  for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
          zeroCount++;
          array.splice(i, 1);
          i--;
      }
  }
  for(let i = 0; i < zeroCount; i++) {
      array.push(0);
  }
  return array.toString().split(',').join('');
}

console.log(zeroEnd([1, 2, 3, 0, 5, 0, 7, 8, 9, 10]));