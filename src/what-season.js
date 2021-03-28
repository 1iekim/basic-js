const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  if(Object.prototype.toString.call(date) === '[object Date]'){
  let m = date.getMonth();
  if(m == 0 || m == 1 || m == 11) {return 'winter';}
  else if(m >= 2 && m <= 4) {return 'spring';}
  else if(m >= 5 && m <= 7) {return 'summer';}
  else if(m >= 8 && m <= 10) {return 'autumn';}
  }
  if (typeof date == 'undefined') {return 'Unable to determine the time of year!'}
  else throw new Error();
};
