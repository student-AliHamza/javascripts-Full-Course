function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


// javascript my har koi chez objects hi ha

// this is always uesd for Object

function createUser(username,score){
    this.username = username;
    this.score = score

}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",25);
const tea = new createUser("tea",23);

chai.printMe()

// A new object is created : the new keyword initiates the creation of
// a new javascript object


// A protype is linked : The newly created objects gets linked to the prototype
// property of the constructor function . This means that it has access to properties
// and methods defined on the constructor prototype


// The constructor is called : The constructor function is called with the specified 
// argunments and this is bound to the newly created object . if no explict return value is
// specified from the constructor javascript assume this the newly created object to be the 
// intended return value. 


// The new object is created : After the constructor function has been called if it doest
// return a non primitive value (object array function etc) , the newly created object is returned



// ********************prototypes*******************

let myName = "hitesh    "

console.log(myName.trim().length);


let hero = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spicy power is ${this.spiderman}`);
        
    }
}
 

// // inheritance
// const user ={
//     name : "chai",
//     email :"username"
// }
// const teacher = {
//     makevedio : true
// }
// const teachingSupport = {
//     isAvailable : false
// }
// const TASupport = {
//     makeAssignments : "Js Assignments",
//     fullTime : true,
//     __proto__ : teachingSupport

// }
// teacher.__proto__ = User;

let anotherUsernmae = "Chaiurcode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is :${this.trim().length}`);
}

anotherUsernmae.trueLength()
"hitesh".trueLength()
"icetea".trueLength()