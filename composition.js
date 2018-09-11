"use strict"

class Cookie {
  constructor(name) {
    this._name = name;
    this._status = 'mentah';
    this._ingredients = [];
  }

  bake() {
    this._status = 'selesai dimasak';
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name);
    this._peanut_count = 100;
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name);
    this._choc_chip_count = 200;
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name);
    this._other_count = 150;
  }
}

class CookieFactory {
  static create(options) {
    let arrayKue = [];
    for (var i = 0; i < options.length - 1; i++) {
      let buatKueBaru = {};
      if (options[i] === 'peanut butter') {
        buatKueBaru = new PeanutButter(options[i]);
      } else if (options[i] === 'chocolate chip') {
        buatKueBaru = new ChocolateChip(options[i]);
      } else {
        buatKueBaru = new OtherCookie(options[i]);
      }
      arrayKue.push(buatKueBaru);
    }
    return arrayKue;
  }
}

let fs = require('fs')
let options = fs.readFileSync('cookies.txt')
  .toString()
  .split("\n")

//TESTCASE
// let kueKacang = new PeanutButter('peanut butter')
// console.log(kueKacang);
// let kueCoklat = new ChocolateChip('chocolate chip')
// console.log(kueCoklat);
let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);
