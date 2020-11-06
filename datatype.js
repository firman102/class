// string datatype
let address = 'Jl. Pemuda';

// object datatype
const a = {id : 1, 
            name: 'tom', 
            address: address   // memasukkan variabe address ke object a
          }

          // atau bisa ditulis sebagai berikut
const a = {
            id: 1,
            name: "tom",
            address // cukup ditulis address artinya key-nya adalah address dan value-nya adalah address
          };


console.log(a);


// membuat function dengan input default value
function name(name, sayHi='', text=''){
  console.log('hello '+name+' '+sayHi+' '+text);
}

name('tom', 'how are you','today'); // mengirim 3 variable name, sayHi, text
name('mike', 'hi');                 // mengirim 2 variable name, sayHi, sedangkan text menggunakan default value
name('bob');                        // mengirim 1 variabe name, sayHi dan text menggunakan default value

// jika variable input lebih dari 3, lebih baik kirim berupa object
function name({name, address}){
  // object input {name, address}
  console.log('name: '+ name+' '+ 'address: '+address);
}

// object yg akan dijadikan sebagai input
const data = {
  address: "Jl. Pemuda", 
  name: "tom" 
}

// object data dikirim sebagai input untuk function name
const x = name(data);

console.log(x);