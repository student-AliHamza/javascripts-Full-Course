// sound deveices ur cemara devices my use hoty ha

// Promise ky 3 states hoty ha
// pending
// fullfill
// rejected

const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task
    // databaseCalls , cryptography , network
    setTimeout(function(){
      console.log('Async task is complete');
    //   pehly async complete ho ga bad my ye resolve ho ga
      resolve()
    },1000)
})

// .then          ka matlab ap ka connecton seda  resolve ky sath ha 
promiseOne.then(function(){
    console.log("promise consume")
})






new Promise(function(resolve,reject){
    console.log("this is 2nd promises");
    resolve();
}).then(function(){
  console.log("Promise 2 consume")  ;
})



const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email : "alihamzajaved746@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
      console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username :"hitesh" ,passward  : "1234"})
    }else{
        reject("Error : somthings went wrpng")
    }
   })
},1000)


promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected")
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username :"javascript" ,passward  : "1234"})
        }else{
            reject("Error : somthings went wrpng")
        }
       })
})


async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive();



async function getalluser() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
console.log(data);
} catch (error) {
   console.log("E :",error) 
}
}
getalluser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(data)
})
.catch((error)=>console.log(error))

