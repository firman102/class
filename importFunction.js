/*
    cara menggunakan function yg berada di file lain
    ./ => artinya current directory, directory yg sama dengan file yg menggunakannya,
    karena ada 2 function berupa object: 
    module.exports = { rpToDollar, rpToDollar2 }
*/
const { rpToDollar, rpToEuro } = require("returnFunction");


console.log(rpToDollar(2000));
console.log(rpToEuro(2000));
