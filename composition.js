class Cookie {
    constructor(ingredients){
        this._name = "kosong"    
        this._status = "Mentah"
        this.ingredients = ingredients;
        this.has_sugar = null;
    }
    bake(){
        this._status = "selesai dimasak"
    }
}
class PeanutButter extends Cookie{
    constructor(data){
        super()
        this._name = data[0]||'Kosong';
        this.peanut_count = 100;
        this.ingredients = data[2];
        this.has_sugar = data[1]||'Kosong';
    }
}
class ChocolateChips extends Cookie{
    constructor(data){
        super()
        this._name = data[0]||'Kosong';
        this.choc_chip_count = 200;
        this.ingredients = data[2];
        this.has_sugar = data[1]||'Kosong';
    }
}
class OtherCookie extends Cookie{
    constructor(data){
        super()
        this._name = data[0]||'Kosong';
        this.other_count = 150;
        this.ingredients = data[2];
        this.has_sugar = data[1]||'Kosong';
    }
}
class CookieFactory {
    static create(option){
        let hasil = []
        for(let i = 0;i < option.length;i++){
            if(option[i][0] === 'peanut butter'){
                let peanutButter = new PeanutButter(option[i])
                hasil.push(peanutButter)
            }else if(option[i][0] === 'chocolate chip'){
                let chocolateChips = new ChocolateChips(option[i])
                hasil.push(chocolateChips)
                
            }else{
                let otherCookie = new OtherCookie(option[i])
                hasil.push(otherCookie)
            }
        }
        return hasil
    }
    static cookieRecommendation(day,factory){
        let hasil = [];
        hasil.push(day)
        for(let i = 0;i < factory.length;i++){
            if(factory[i].has_sugar === 'free'){
                hasil.push(factory[i]);
            }
           
        }
        return hasil
    }
}
class ingredients{
    constructor(option){
        this.name = option[0];
        this.amount = option[1];
    }
}
const fs = require('fs');
var option = fs.readFileSync('cookies.txt').toString().split('\n')
var option2 = fs.readFileSync('bahan.txt').toString().split('\n')
var hasilExtract = extractOption2(option2)
function extractOption2(option2){
    let hasil = []
    for(let i = 0;i < option2.length;i++){
        let isi = [];
        if(option2[i].indexOf('sugar') === -1){
            isi.push('free')
        }else{
            isi.push('ya')
        }
        for(let j = 0;j < option2[i].length;j++){
            if(option2[i][j] === '='){
                isi.unshift(option2[i].substr(0,j-1));
                isi.push(option2[i].substr(j-1))
            }
            
        }
        
        hasil.push(isi)
    }
    return hasil
}
//console.log(hasilExtract)
let batch_of_cookies = CookieFactory.create(hasilExtract)
//console.log(batch_of_cookies)
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday",batch_of_cookies);
console.log("sugar free cakes are :");
for(let i = 1;i < sugarFreeFoods.length;i++){
    console.log(sugarFreeFoods[i]._name)
}