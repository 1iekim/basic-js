const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrStr) {
  //throw new CustomError('Not implemented');
  if(!Array.isArray(arrStr)) return false;
  let arr = [];
  for(let i = 0; i < arrStr.length; i++) {
    if(typeof arrStr[i] == 'string') {
    arrStr[i] = arrStr[i].trim().toUpperCase();
    arr.push(arrStr[i][0]);}
  };
  return arr.sort().join('');
};
