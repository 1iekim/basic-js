const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if(typeof date == 'undefined') {return 'Unable to determine the time of year!'}
  if(Object.getOwnPropertyNames(date).length>0) throw new Error('Invalid date!');
  if(Object.prototype.toString.call(date)==='[object Date]') {
    let m = date.getMonth();
    return m<2 || m == 11 ? 'winter' :
           m>=2 && m<=4 ? 'spring' :
           m>=5 && m<=7 ? 'summer' : 'autumn';
  }
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
