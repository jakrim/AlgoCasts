// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString().split('').reverse().join('');

  return parseInt(str) * Math.sign(n);
}

console.log(reverseInt(-5));
console.log(reverseInt(500));
console.log(reverseInt(15));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

module.exports = reverseInt;

// function reverseInt(n) {
//   let str = n.toString().split('').reverse().join('');

//   if (n < 0) {
//     return parseInt(str) * -1;
//   }

//   return parseInt(str);
// }
