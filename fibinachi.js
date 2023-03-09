function fibonachi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 2) + fibonachi(n - 1);
}
console.log(fibonachi(8));

// examples of fibonachi's numbers: 1, 1, 2,3, 5, 8, 13, 21 ...
