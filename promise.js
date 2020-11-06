const firstpromise = () => (new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve('first process')},1000);
}));

async function sync(){
 return await firstpromise()
 .then(x => {
   return x;
 })
}

console.log(sync());