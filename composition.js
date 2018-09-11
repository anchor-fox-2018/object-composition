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

class CookieFactory {
  static create(options) {

  }
}

//TESTCASE
let kueKacang = new PeanutButter('peanut butter')
console.log(kueKacang);
let kueCoklat = new ChocolateChip('chocolate chip')
console.log(kueCoklat);
