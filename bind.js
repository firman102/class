var methods = {
  numbers: [1, 5, 8],
  sum: function () {
    // Function expression
    console.log(this);
    return this.numbers.reduce(function (acc, num) {
      // func. expression
      return acc + num;
    });
  },
};

methods.sum.bind({numbers:[1,2,3]});
console.log(methods.sum());



// // Penggunaan bind pada function

// // membuat object person1
// var person1 = { 
//   firstName: "Jon", 
//   lastName: "Kuperman" 
// };

// // membuat object person2
// var person2 = { firstName: "Kelly", lastName: "King" };

// function say() {
//   // function memiliki environment variabe this yg bisa di assign menggunakan fungsi bind
//   console.log(this);
//   console.log("Hello " + this.firstName + " " + this.lastName);
// }

// // bind person1 ke function say
// var sayHelloJon = say.bind(person1);
// sayHelloJon(); 

// // bind person2 ke function say
// var sayHelloKelly = say.bind(person2);
// sayHelloKelly(); 
