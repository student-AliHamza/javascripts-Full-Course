// ***************************  Arrow Functions And This  *********************

const user = {
    email : "alihamzajaved@gmail.com",
    name : "ali",
    welcomeMessage : function(){
console.log(`my name is ${this.name} and my email is ${this.email}`);
    }
}

user.welcomeMessage();


// ********************          Arrow function


// agr curly brackets lagany ha phir retun likna
const addtwonumber = (num1,num2) => {
    return num1 + num2;
}
console.log(addtwonumber(3,4))

//  agr pranthesis lagany ha phir return nahi likhna used in reacts
const addition = (num1,num2)=>(num1 + num2)
console.log(addition(3,4));


// immediately invoked function expression

// agr function ko wrap 

(function wrap (name){
    console.log(`this is wrap function ${name}`)
})
("javascript");

(()=>{
    console.log(`this is Arrow function`)
})
()