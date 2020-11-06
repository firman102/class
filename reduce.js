// const array = [1, 1, 2, 2, 3, 3];

//  const reduceVal = array.reduce((p,c,i) => {
//   console.log(p,c,i);
//   return p+c;
//  },0);

//  console.log(reduceVal);



 const pokemon = [
   { name: "charmander", type: "fire" },
   { name: "squirtle", type: "water" },
   { name: "bulbasaur", type: "grass" },
 ];

 const getMapFromArray = (data) =>
   data.reduce((acc, item) => {
     // add object key to our object i.e. charmander: { type: 'water' }
     acc[item.name] = { type: item.type };
     return acc;
   }, {});

console.log(getMapFromArray(pokemon));