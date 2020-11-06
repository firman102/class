// function usesThis(name) {
//     this.name = name;

//     function returnMe() {
//       console.log('Nilai this.name: ', this.name); 
//         return this;        //this mengacu ke scope function returnMe
//     }

//     return {
//         returnMe : returnMe
//     }
// }

// var usesthis = usesThis('John');
// console.log(usesthis.returnMe());


function usesThat(name) {
    let self = this;
    this.name = name;
    this.age = 20;

    function returnMe() {
      console.log('Nilai selft.name: ', self);
      
        return self;            //this di copy ke variable self kemudian di pakai di function returnMe
    }

    return {
        returnMe : returnMe
    }
}

var usesthat = usesThat("Dave");
console.log(usesthat.returnMe());



// function usesArrowFunction(name) {
//   this.name = name;

//   let returnMe = () => {
//     console.log('Nilai this.name: ', this.name); //scope is baked in with 'that' to the "class"
//     return this;
//   }

//   return {
//     returnMe: returnMe,
//   };
// }

var usesthisArrow = usesArrowFunction("Arrow");
console.log(usesthisArrow.returnMe());

