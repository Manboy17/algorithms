const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return item;
    }
  }
  return null;
}
console.log(linearSearch(arr, 7));
console.log(linearSearch(arr, 2));
