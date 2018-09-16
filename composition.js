
var fs = require('fs')
var options = fs.readFileSync('cookies.txt')
    .toString()
    .split("\n")

console.log(options)

// ['peanut butter',
// 'chocolate chip',
// 'chocolate cheese',
// 'chocolate butter']

class Cookie {
    constructor(name) {
        this.name = name;
        this.status = 'mentah';
        this.ingredients = [];
    }

    bake() {
        this.status = 'selesai dipanggang';
    }
}

class PeanutButter extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.choc_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.other_count = 150;
    }
}

//bring in all cookie, from var options, cycle them in cookie factory
class CookieFactory {
    static create(options) {
        let result = [];
        let tempResult;
        for (let i = 0; i < options.length; i++) {
            if (options[i] === 'peanut butter') {
                tempResult = new PeanutButter(options[i]);
            }
            else if (options[i] === 'chocolate chip') {
                tempResult = new ChocolateChip(options[i]);
            }
            else {
                tempResult = new OtherCookie(options[i]);
            }

            result.push(tempResult);
        }
        console.log(result);
    }
}


CookieFactory.create(options);
