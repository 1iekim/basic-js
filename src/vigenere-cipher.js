const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    direction == undefined ? this.direction = true : this.direction = direction;

    this.FIRST_LETTER = "A".charCodeAt(0); // 65
    this.LAST_LETTER = "Z".charCodeAt(0); // 90
    this.mod = this.LAST_LETTER - this.FIRST_LETTER + 1; // 26
  }

  encrypt(message, key) {
    if ((message == undefined) || (key == undefined)) {
      throw new Error('Incorrect arguments!');
    }

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();

    let str = [new_message.length];
    let corrector = 0;
    for (let i = 0; i < new_message.length; i++) {
      if ((new_message.charCodeAt(i) < this.FIRST_LETTER) || (new_message.charCodeAt(i) > this.LAST_LETTER)) {
        str[i] = new_message[i];
        corrector += 1;
        continue;
      }

      let letter_code = new_message.charCodeAt(i) - this.FIRST_LETTER;
      let key_code = new_key.charCodeAt((i - corrector) % new_key.length) - this.FIRST_LETTER;
      str[i] = String.fromCharCode(((letter_code + key_code) % this.mod) + this.FIRST_LETTER);
    }

    return this.direction ? str.join('') : str.reverse().join('');
  }

  decrypt(message, key) {
    if ((message == undefined) || (key == undefined)) {
      throw new Error('Incorrect arguments!');
    }

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();

    let str = [new_message.length];
    let corrector = 0;
    for (var i = 0; i < new_message.length; i++) {
      if ((new_message.charCodeAt(i) < this.FIRST_LETTER) || (new_message.charCodeAt(i) > this.LAST_LETTER)) {
        str[i] = new_message[i];
        corrector += 1;
        continue;
      }

      let letter_code = new_message.charCodeAt(i) - this.FIRST_LETTER;
      let key_code = new_key.charCodeAt((i - corrector) % new_key.length) - this.FIRST_LETTER;

      if (letter_code - key_code < 0) {
        str[i] = String.fromCharCode(((letter_code - key_code) + this.mod) + this.FIRST_LETTER);
      } else {
        str[i] = String.fromCharCode(((letter_code - key_code) % this.mod) + this.FIRST_LETTER);
      }
    }

    return this.direction ? str.join('') : str.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
