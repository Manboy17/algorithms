const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let flag = false;
  let position = -1;
  while (flag === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      flag = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
console.log(binarySearch(arr, 5));
console.log(count);
