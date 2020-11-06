// membuat library function yg akan di manfaatkan oleh function lain

// terdapat 2 function yaitu rpToDollar, dan rpToDollar2 
function dollarToRp(rpValue) {
  return rpValue * 15000;
};


function rpToEuro(rpValue) {
  return rpValue * 16000;
};

console.log(dollarToRp(1000));

console.log(dollarToRp(100));

// export function sehingga bisa di pakai oleh function lain
module.exports = { rpToDollar, rpToEuro };