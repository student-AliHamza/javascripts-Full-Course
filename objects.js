//  singleton


// objects literals

// agr object ky ander symbol ko print karna ho
const my_symbol = Symbol("key1");


const jsUser = {
    name : "hitesh",
    age : 18,
    [my_symbol] :"mykey1",
    location : "Alipur",
    army_email : "alihamzajaved746@gmail.com",
    isLoggedIn : false,
    last_login_days : ['monday','tuesday']

}
console.log(jsUser.army_email);


// we can print below there

console.log(jsUser["army_email"]);

console.log(jsUser[my_symbol]);


// agr email ko change karna ho 
jsUser.army_email = "hiteshchgmail.com";
console.log(jsUser);




jsUser.greeting = function(){
    console.log("hello js user");

}

console.log(jsUser.greeting());



jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)

}
console.log(jsUser.greetingTwo());



// singleton


const tinderuser = new Object();
tinderuser.id = 123;
tinderuser.name = 'ali hamza';
tinderuser.email = "alihamza@gmail.com";
console.log(tinderuser);



const obj1 = {
    name : "ali",
    fullname :{
        fuName : "hamza",
        email : {
            
       gmail: "chalihaza@gmail.com"
        }
    }
}
// console.log(obj1);

// agr 2 object ko concate karna ho
const object1 = {1:"a",2:"b",3:"c",4:"d",5:"e"};

const object2 = {6:"f",7:"g",8:"h",9:"i"};
const object3 = {10:"j",11:"k",12:"l",13:"m"}

// const object4 = Object.assign(object1,object2);
const object4 = {...object1,...object2,...object3};

console.log(object4);



// Object de-structure and Json API


const destructure = {
    name : "ali_hamza",
    father_name : "javed"
}


const {father_name} = destructure;

console.log(father_name);


// API ka matlab apna kam kisi per dal dena




