function palindrom(word) {
  word = word.toLowerCase();
  for (let i = 0; i <= word.length / 2; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrom("aaddaa"));//true
console.log(palindrom("aaddaf"));//false

// another version of that (much easier to understand to more modern implementation)

function palindrom(word) {
  word = word.toLowerCase();
  return word === word.split("").reverse().join("");
}
console.log(palindrom("aaSsaA")); //true
