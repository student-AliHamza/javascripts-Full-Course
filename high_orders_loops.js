// for of loops


const numbers =[1,2,3,45,6];

for (const i of numbers) {
    // console.log(i);
    
}

let greetings = "my name is ali hamza"

for (const gree of greetings) {
    // console.log(gree);
    
}

//  Maps datatypes


const map = new Map()
map.set('in' , "india")
map.set('usa' , "united states of america")
map.set('fr' , "fance")


for (const [key ,value] of map) {
    console.log(key,value);
}


// ********************************************for in Lopps ******************************
// obj per for of loops kam nahi kar raha tha 
const myobject = {
    game1 : 'spider',
    game2 : "lpgs",
    cpp : "c++",
    js : "javascript"
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`)
}



// for array in loops


const  programming  = ['c++','javascript','python','django']

for (const key in programming) {
    console.log(programming[key]);
}


//  for each loops

const coding = ['js','rubby','java', "cpp"]

// coding.forEach(function(value)  {
//    console.log(value); 
// });



// for arrow function in each loops
coding.forEach(value => {
    console.log(value)
});


// ***************** this is interesting ******************

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)



// coding( (item , index ,arr)=>{
// console.log(item,index,arr);
// })



const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js",
        
    },
    {
        languageName : "python",
        languageFileName : "python",

    },
    {
        languageName : "java",
        languageFileName : "java"

    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
    
});





// const greeting = ['Allah','Muhammad',"Rasool"];

// for (const gree of greeting) {
//     console.log(gree);
    
// }


const object_name = {
    name : "saim",
    book : "holyQuran",
    masjid : "imaam",
}

for (const obn in object_name) {
    console.log(`name is ${obn} and valuue is ${object_name[obn]} `)
}


const maps = new Map();

maps.set('abs' , 'cgf')
maps.set('abc' , 'chf')
maps.set('abd' , 'cif')
maps.set('abe' , 'cjf')

for (const [key,value] of maps) {
    console.log(key,value)
    
}

const array_each =[1,2,3,45,67,8,9];
array_each.forEach(element => {
    console.log(array_each)
});