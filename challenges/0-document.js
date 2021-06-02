// TODO (Ex.0): document and write tests for this function

/**
 * Convert an integer to the negative equivalent (if not already negative)
 * @param {integer} n - input number
 * @returns {integer} negative form of `n`, or `n` if already negative
 */
function asNegative(n) {
  if (n > 0) { //if (n >= 0) { - illustrates -0
    return n*-1
  }
  return n
}

console.log(-1, asNegative(1))
console.log(-1, asNegative(-1))
console.log(0, asNegative(0))
console.log(-1.5, asNegative(1.5))
console.log(-1, asNegative('1'))
console.log(undefined, asNegative())
