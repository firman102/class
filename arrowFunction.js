// const f = () => console.log('test arrow function');

// f();

// const a = 1;
// const b = 'data';
// a = 2;
// b='test';
const a = {
  key: 1
};

// a.key = 2;
// a.key2 = 3;

// a = {test : 1};

delete a.key;

a.key = 5;
a['key2'] = 6;
console.log(a);