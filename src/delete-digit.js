const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let max = 0;

  for(let i = 0; i < (number+'').length; i++) {
    let value = +(number+'').replace((number+'')[i], '');
    
    if(value >= max) max = value;
  }

  return max;
}

module.exports = {
  deleteDigit
};
