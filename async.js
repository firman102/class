// console.log('Hello');
// console.log('Javascript');
// console.log('Coder');

// -------------------------------------------------------------
// function asyncFunction(){
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Javascript");
//   }, 100); // tunda selama 100 miliseconds
//   console.log("Coder");
// }

// asyncFunction();

// ------------------------------------------------------------
// callback
function p1() {
  console.log("Hello");
}

function p2(callback) {
  setTimeout(function () {
    console.log("Javascript");
    callback();
  }, 100);
}

function p3() {
  console.log("Coder");
}
p1();
p2(p3);


// const fs = require('fs');

// function readFileCallback(err, data) {
//   if (err) {
//     console.log("Error Read File :" + err);
//   } else {
//     console.log(data.toString());
//   }
// }
// let data = fs.readFile("filter.js", readFileCallback);
