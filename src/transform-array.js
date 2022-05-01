const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');\
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [].concat(arr);

  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] == '--discard-next'){
      newArr[i] = 'nan';
      if(i != newArr.length) newArr[i+1] = 'nan';
    } else if(newArr[i] == '--discard-prev') {
      newArr[i] = 'nan';
      if(i != 0) newArr[i-1] = 'nan';
    } else if(newArr[i] == '--double-next') {
      if(i != newArr.length-1) {
        newArr[i] = newArr[i+1];
      } else newArr[i] = 'nan';
    } else if(newArr[i] == '--double-prev') {
      if(i != 0) {
        newArr[i] = newArr[i-1];
      } else newArr[i] = 'nan';
    }
  }

  return newArr.filter(el => el != 'nan');
}

module.exports = {
  transform
};
