const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(strN) {
  if(typeof strN != 'string') return false;
  if(isNaN(+strN)) return false;
  if(+strN <= 0 || +strN > 15) return false;

  let time = (Math.log(MODERN_ACTIVITY/strN))/(0.693/HALF_LIFE_PERIOD);
  return Math.ceil(time);
};
