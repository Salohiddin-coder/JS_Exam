function maxPrice(array) {
  let maxSum = 0;
  let maxSumName = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > maxSum) {
      maxSum = array[i].price;
      maxSumName = array[i].name;
    }
  }
  return maxSumName;
}

console.log(maxPrice([{ name: 'apples', price: 3 }, { name: 'bananas', price: 7 }, { name: 'oranges', price: 5 }]));