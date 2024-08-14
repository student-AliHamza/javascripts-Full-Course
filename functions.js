function myfunction(){
    console.log("h")
    console.log("i")
    console.log("j")
    console.log("k")
}
myfunction()



function twoNumbers(Number1,number2){
    console.log(Number1 + number2)
}
twoNumbers(5,6);

function threenumber(username){
    return `my name is ${username} this is`
}
console.log(threenumber("ali hamza"));


// rest opreator

function claculateEcommerce(...num1){
    return num1;
}
console.log(claculateEcommerce(122,233,333,444));


const school = {
    school_name : "scholar_foundation",
    street : "kolho",
    number : 123444
}
function handleObject (anyobject){
 console.log(`My school name is ${anyobject.school_name} and near the ${anyobject.street} street and the 
    school number is ${anyobject.number}`);
}

handleObject(school);