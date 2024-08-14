// const promiseOne = new Promise(function(resolve , reject){

//     setTimeout(function(){
//         console.log(`Async task is complete`);
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// we write the above code below there

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("2nd Async task is complete")
        resolve();
    },1000)
}).then(function(){
    console.log("2nd promise consumed")
})




// how data consumption

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({ username : "chai" , email : "alihamzajaved746@gmail.com"})
    },1000)
})

promiseThree.then(function(user){

    console.log(user)
})



// four promise

const promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "alihamza" , passward : "1234"})
        }else{
            reject(`Error somethings wrong`)
        }
    },1000);
})
promisefour.then((user)=>{
    console.log(user)
    return user.username
}).then(function(){
    console.log(`${username,passward}`)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})



// promise five
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "alihamza" , passward : "1234"})
        }else{
            reject(`Error somethings wrong`)
        }
    },1000);
})

async function consumepromiseFive() {
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumepromiseFive()




async function getAlluser() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
   } catch (error) {
    console.log("E :" , error)
   }

}
getAlluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})