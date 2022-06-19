function maxPrice(array) {
  let max = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > max) {
      max = array[i].name;
    }
  }
  return max;
}

console.log(maxPrice([{ name: 'apples', price: 3 }, { name: 'bananas', price: 4 }, { name: 'oranges', price: 5 }]));