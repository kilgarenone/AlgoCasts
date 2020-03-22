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
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  // Match.sign return +ve num as '1', -ve as '-1'.
  // we use it here to preserve the -ve and +ve state
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
