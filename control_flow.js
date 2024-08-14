// contol flow 

// if statenments
// comparison operators ,<  >  <=   >=  ==   !=  ===
if(true){

}
else if(false){

}

else{
    console.log("this is dog")
}

const user_loggedin = true
const debitcard = true;

if (user_loggedin && debitcard){
    console.log("allow to buy course");
}



// Switch statenment
const month = 3

switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("febuary");
        
        break;
    case 3:
        console.log("febuary");
        
        break;
    case 4:
        console.log("febuary");
        
        break;

    default:
        console.log("default case month")
        break;
}


// important tips

const userEmail = []
switch (userEmail) {
    case userEmail:
        console.log("got user email")
        
        break;

    default:
        console.log("dont have user email")
        break;
}


// important tips

// falsy values             false , 0 , -0 ,bigInt 0n , " " , null , undefined , Nan


// truely values            "0"  ,  'false'  ,"   "   ,[]  ,{} function(){}


if(userEmail.length === 0){
    console.log("Array is empty")
}


const emptyObj = {
    name : "ali"
 }


if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
else{
    console.log("object is not empty");
}



// Nullish coalesting Operators   ?? null defined


let value;

value = 5 ?? 10;
value = null ?? 10;
value = undefined ?? 15;

value = null ?? 10 ?? 20;

console.log(value);


// terniary operator

const terniaryNumber = 100;

terniaryNumber >= 80 ? console.log("good"): console.log(false);