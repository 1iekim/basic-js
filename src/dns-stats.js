const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let obj = {};
  let arr = domains.map(x => x.split('.').reverse().map(x => '.' + x).join(''));
  let res = [];

  for(let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let start = 0;

    for(let j = 0; j < str.split('.').length-1; j++) {
      let end = str.indexOf('.', start + 1);
      let add = str.substring(0, end == -1 ? str.length : end);

      obj[add] = obj[add]+1 || 1;
      start = end;
      res.push(add);
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
