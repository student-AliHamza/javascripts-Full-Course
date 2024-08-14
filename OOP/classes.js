// classes my javascript nahi hoti 
// ya high level language my bi oop nahi hoti

// oop

// object         collection of properties and methods 

// why use oop
// object literal

// Constructor function
// prototypes
// classes
// instances (new , this)

// types of inheritence
// inheritance
// encapsulation
// Abstraction
// polymorphism

// objects kia hoty ha

const username = {
    username : "sayHite",
    name : "Ali hamza",

    getUsername : function(){
        console.log("got ser details")
    }
}

console.log(username.name)
console.log(username.getUsername())


function User(username , logincount , isloggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isloggedIn = isloggedIn;

//  return this;
}


// oo ho es my usertwo kesy print horaha agr new keyword na likhy gy to ye overright kr dy ga
// const useone = User("hitesh",12,true)
// const usetwo = User("chai ur code",13,true)


const useone = new User("hitesh",12,true)
const usetwo = new User("chai ur code",13,true)

console.log(useone)
