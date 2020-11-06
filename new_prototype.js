// // Let's create an object o from function f with its own properties a and b:
// const f = function () {
//   this.a = 1;
//   this.b = 2;
// };

// let o = new f(); // {a: 1, b: 2}

// let p = new f();
// console.log(o);
// // add properties in f function's prototype
// f.prototype.b = 3;
// // f.prototype.c = 4;
// f.prototype.c =4;
// f.prototype.c =5;
// f.b = 3;
// console.log('instance o untuk value a: ', o.a); // 1
// console.log("instance p untuk value a: ", p.a);

// console.log("instance o untuk value b: ", o.b); // 2
// console.log("instance p untuk value b: ", p.b); // 2

// console.log("instance o untuk value c: ", o.c); // 4
// console.log("instance p untuk value c: ", p.c); // 4

// console.log("instance o untuk value d: ", o.d); // undefined
// console.log("instance p untuk value d: ", p.d); // undefined


// // //------------------------------------------------------
// // function Car() {
// //   console.log(this);
// // }
// // mvp = new Car();            // membuat instance dari Car
// // sedan = new Car();


// // console.log(mvp.color);    // undefined
 
// // Car.prototype.color = 'original color';
// // console.log(mvp.color);    // 'original color'
 
// // mvp.color = 'black';
// // console.log(mvp.color);    // 'black'

// // console.log(Object.getPrototypeOf(mvp).color); // 'original color'
// // console.log(Object.getPrototypeOf(sedan).color); // 'original color'
// // console.log(mvp.color);   // 'black'
// // console.log(sedan.color);   // 'original color'


const f3 = function () {
  // let self = this;
  this.a = 1;
  let a = 2;
  // console.log(this.a, a);
  const test = () => {
    console.log(a, this.a);
  }
  return test;
};

// f3();

const inst1 = new f3();

inst1();