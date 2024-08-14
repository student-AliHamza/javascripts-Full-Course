// local and global scope

// local scope carli brackets ky ander local scope kahty ha {}
// var es le nahi use karty because var ko local 

// var ko global access nahi kar sakty

if(true){
let a= 10;
const b = 20;
var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);


// Scope level and mini  hosting

// nested function
function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        console.log(username);

    }
    // console.log(website); // es ko hum print nahi kar sakty

    two();
}


one();




if(true){
    const userName = 'Ali'
    if(userName==="Ali"){
        const  website = "youtube";
        console.log(userName,website)
    }
}



// ***************************interesting*************************

function addone(num){
    return num +1
}
console.log(addone(1));




const addtwo = function(num){
    return num +2;
}
console.log(addtwo(3));




