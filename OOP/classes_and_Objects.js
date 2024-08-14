// Es6 ky bad hi ham use karty ha


//classes ky ander function es tara likhy jaty ha


// class user{
//     constructor(username , email ,passward) {
//         this.username = username;
//         this.email = email;
//         this.passward = passward

        
//     }
//      encryptPassward() {
//         return `${this.passward} abc`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
//     emial_changer(){
//         return `${this.email}`;
//     }
// }




// const chai = new user("chai","chai@gmail.com","1234");


// console.log(chai.encryptPassward());
// console.log(chai.changeUserName());
// console.log(chai.emial_changer());



// Behind the scene classes

// function User(username,email,passward){
//     this.username = username;
//     this.email = email;
//     this.passward = passward
// }

// User.prototype.encryptPassward = function() {
//     return `${this.passward} abc`;
// }
// User.prototype.changeEmail = function(){
//     return `${this.email}`;

// }
// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`;

// }


// const tea = new User("tea","tea@gmail.com","1234");


// console.log(tea.encryptPassward());
// console.log(tea.changeUserName());
// console.log(tea.changeEmail());


// inheritance


// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username is ${this.username}`)
//     }
// }
// class teacher extends User{
//     constructor(username,email,passward){
//         super(username)
//         this.email = email;
//         this.passward = passward;
//     }
//     AddCourse(){
//         console.log(`A new course is added by ${this.username}`)
//     }
// }
// const chai = new teacher("chai","Chai@gmail.com","1344565432");

// chai.AddCourse()

// const masalchai = new User("masalachai");
// masalchai.logMe()

class User{
    constructor(username){
        this.username = username;
    }
    LogMe(){
        console.log(`${this.username}`)
    }
    static created(){
        return "1234";
    }
}
class hitesh extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}
// const hitesh = new User("Hitesh")
// console.log(hitesh.created());


const iphone = new User("iphone","iphone@gmail.com")
console.log(iphone.LogMe())