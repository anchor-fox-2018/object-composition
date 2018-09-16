var fs = require('fs')

///////////////
// RELEASE 0 //
///////////////

// all cookie material
const options = fs.readFileSync('cookies.txt')
    .toString()
    .split("\n")

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
        return result;
    }
}

let cookieList = CookieFactory.create(options);
// console.log(cookieList);

// console.log(cookieList);

///////////////
// RELEASE 1 //
///////////////

// parsing and importing the file

const recipeJSON = fs.readFileSync('recipe.json');
const recipe = JSON.parse(recipeJSON);
let result = [];

// displaying sugar free cakes
for (i in recipe) {
    let sugar = false;

    if (recipe[i].sugar !== undefined) {
        sugar = true;
    }

    if (sugar === false) {
        result.push(recipe[i].name);
    }
}

console.log('Sugar free cakes are:');
for (i in result) {
    console.log(result[i]);
}