const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.addition === undefined ? 
          options.addition = '' : options.addition;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  let arrAddition = Array.from({length: options.additionRepeatTimes}, 
    (_,i) => `${options.addition}`).join(options.additionSeparator);
  let res = Array.from({length: options.repeatTimes}, 
    (_,i) => str + arrAddition).join(options.separator);

  return res;
}

module.exports = {
  repeater
};
