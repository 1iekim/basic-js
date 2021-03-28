const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    let count = 0;
    for(let val of arr) {
      if (Array.isArray(val)) {count++; this.calculateDepth(val);}
    }
    return count;
  }
};