function setUserName(username){
    this.username = username;
}

function createUser(username,email,passward){
    setUserName.call(this,username)

    this.email = email;
    this.passward = passward;

}

const chai = new createUser("chai","chai@gmail.com","123")
console.log(chai)