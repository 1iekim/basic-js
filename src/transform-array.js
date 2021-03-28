const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if(Array.isArray(arr)) {
  let narr = [];
  narr = narr.concat(arr);
  for(let i = 0; i < narr.length; i++) {
    if (narr[i] == '--discard-next') {narr[i] = 'nan'; if(i != narr.length) narr[i+1] = 'nan';}
    else if (narr[i] == '--discard-prev') {narr[i] = 'nan'; if(i != 0) narr[i-1] = 'nan';}
    else if (narr[i] == '--double-next') {if(i != narr.length-1){narr[i] = narr[i+1];} else narr[i]='nan';}
    else if (narr[i] == '--double-prev') {if(i!=0){narr[i] = narr[i-1];} else narr[i]='nan';}
  }
  for(let i = 0; i<narr.length; i++) {if(narr[i] == 'nan') {narr.splice(i,1); i--;}};
  return narr;
}
  throw new Error();
};
