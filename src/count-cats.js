const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrToArr) {
  //throw new CustomError('Not implemented');
  let count = 0;
  for(let arr of arrToArr) {
    for(let val of arr){
    if (val == "^^") {count++};
  }}
  return count;
};
