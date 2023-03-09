// Most effective method to sort the array out asap

const arr = [9, 0, -9, 8, 6, 4, -7, 7, 1, -2, -1, 2, 3, -5, 6, -4, 5, 7, 0, 2];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(count);
