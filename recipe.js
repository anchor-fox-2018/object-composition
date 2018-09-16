let data = [
    { name: 'peanut butter', flour: 1, sugar: 2, 'peanut butter': 1, cinnamon: 1, butter: 2 },
    { name: 'chocolate chip', 'chocolate chip': 1, sugar: 1, butter: 2 },
    { name: 'chocolate cheese', flour: 1, sugar: 2, cinnamon: 2, butter: 1 },
    {name: 'chocolate butter', 'gluten free flour': 1, 'flavor adder': 2, butter: 2 }
]

let result = JSON.stringify(data);
let fs = require('fs');
fs.writeFileSync('recipe.json', result, 'utf8');