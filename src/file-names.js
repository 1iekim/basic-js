const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  let arr = [];
  let map = new Map();

  for(let i = 0; i < names.length; i++) {
    if(!map.has(names[i])) {
      map.set(names[i], 1);
      arr.push(names[i]);
    } else {
      let add = `${names[i]}(${map.get(names[i])})`;

      map.set(names[i], map.get(names[i]) + 1);
      map.set(add, map.get(add) + 1 || 1);
      arr.push(add);
    }
  }

  return arr;
}

module.exports = {
  renameFiles
};
