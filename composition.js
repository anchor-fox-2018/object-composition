class Cookie {
    constructor(name){
        this._name = name;
        this._status = "Mentah"
        this.ingredients = [];
    }
    bake(){
        this._status = "selesai dimasak"
    }
}
class PeanutButter extends Cookie{
    constructor(name){
        super(1)
        this._name = name||"kosong";
        this.peanut_count = 100;
    }
}
class ChocolateChips extends Cookie{
    constructor(name){
        super(2)
        this._name = name||"kosong";
        this.choc_chip_count = 200;
    }
}
class OtherCookie extends Cookie{
    constructor(name){
        super(3)
        this._name = name||"kosong";
        this.other_count = 150;
    }
}
class CookieFactory {
    static create(option){
        let hasil = []
        for(let i = 0;i < option.length;i++){
            if(option[i] === 'peanut butter'){
                let peanutButter = new PeanutButter(option[i])
                hasil.push(peanutButter)
            }else if(option[i] === 'chocolate chip'){
                let chocolateChips = new ChocolateChips(option[i])
                hasil.push(chocolateChips)
                
            }else{
                let otherCookie = new OtherCookie(option[i])
                hasil.push(otherCookie)
            }
        }
        return hasil
    }
}
const fs = require('fs');
var option = fs.readFileSync('cookies.txt').toString().split('\n')

let batch_of_cookies = CookieFactory.create(option)
console.log(batch_of_cookies)