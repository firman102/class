// // var methods = {
// //         numbers: [1, 5, 8],
// //         sum: function () {
// //           // Function expression
// //           console.log('nilai this sebelum dirubah: ', this);
// //           return this.numbers.reduce(function (acc, num) {
// //             // func. expression
// //             return (acc + num);
// //           });
// //         },
// //       };
// // const y = methods.sum();
// // console.log('hasil proses sum(): ', y);
// // const z = methods.sum.bind({numbers:[2,3,4]});
// // console.log(z());

// // const out = methods.sum.call({numbers:[1,2,3]});
// // console.log(out);


// // const z = methods.sum.apply({ numbers: [1, 2, 3] });
// // console.log(z);

// // Penggunaan bind pada function

// // membuat object person1
// const person1 = {
//   firstName: "Jon", 
//   lastName: "Doe" 
// };

// // membuat object person2
// const person2 = { firstName: "Kelly", lastName: "King" };

// function say() {
//   // function memiliki environment variabe this yg bisa di assign menggunakan fungsi bind
//   console.log(this);
//   console.log("Hello " + this.firstName + " " + this.lastName);
// }

// // // bind person1 ke function say
// // var sayHelloJon = say.bind(person1);
// // sayHelloJon(); 

// // bind person2 ke function say
// var sayHelloKelly = say.bind(person2);
// sayHelloKelly(); 

// person2 = {firstName:"tom", lastName: "jerry"};

// let integerVar = 1;
// console.log(typeof integerVar);

// integerVar = 'string';
// console.log(typeof integerVar);

console.log(1 == '1');