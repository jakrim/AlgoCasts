// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let result = null;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let key in chars) {
    let current = chars[key];
    if (current > result) {
      result = key;
    }
  }
  return result;
}

module.exports = maxChar;
