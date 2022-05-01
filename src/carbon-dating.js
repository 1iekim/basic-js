const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(strN) {
  // throw new NotImplementedError('Not implemented');
  if(typeof strN != 'string') return false;
  if(isNaN(+strN)) return false;
  if(+strN <= 0 || +strN > 15) return false;

  let time = (Math.log(MODERN_ACTIVITY/strN)) / (0.693/HALF_LIFE_PERIOD);

  return Math.ceil(time);
}

module.exports = {
  dateSample
};
