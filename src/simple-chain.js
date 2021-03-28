const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    if(this.arr) {return this.arr.length;};
  },
  addLink(value) {
    value = value || ' ';
    if(this.arr) {this.arr.push(value);}
    else {this.arr = []; this.arr.push(value);};
  },
  removeLink(position) {
    //this.arr.splice(this.arr.findIndex(position), 1);
    if(this.arr) {this.arr.splice(position-1, 1);}
    else throw new Error();
  },
  reverseChain() {
    if (this.arr) {this.arr.reverse();}
  },
  finishChain() {
    let strArr = `( ${this.arr.join(' )~~( ')} )`;
    this.arr.length = 0;
    return strArr;
  }
};

module.exports = chainMaker;
