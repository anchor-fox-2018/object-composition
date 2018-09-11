"use strict";
const fs = require("fs");

class Cookie {
    constructor() {
        this.status = "mentah";
    }
    bake() {
        this.status = "selesai dimasak";
    }
}

class PeanutButter extends Cookie {
    constructor() {
        super();
        this.name = "peanut butter";
        this.ingredients = [];
        this.peanutCount = 100;
    }
}

class ChocolateChips extends Cookie {
    constructor() {
        super();
        this.name = "chocolate chips"
        this.ingredients = [];
        this.chocolateChipCount = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.ingredients = [];
        this.otherCount = 150;
    }
}

class CookieFactory {
    static create(options) {
        let buffer = [];
        options.forEach(cookieElement => {
            switch (cookieElement) {
                case "peanut butter":
                    //console.log("peanut butter");
                    //console.log(new PeanutButter());
                    buffer.push(new PeanutButter());
                    break;
                case "chocolate chip":
                    //console.log("chocolate chip");
                    //console.log(new ChocolateChips());
                    buffer.push(new ChocolateChips());
                    break;
                default:
                    //console.log("other cookie");
                    //console.log(new OtherCookie());
                    buffer.push(new OtherCookie());
                    break;
            }
        });
        return buffer;
    }
}

let txt = fs.readFileSync("cookies.txt");
let arrTxt = txt.toString().split("\n");

let batchOfCookies = CookieFactory.create(arrTxt);
console.log(batchOfCookies);