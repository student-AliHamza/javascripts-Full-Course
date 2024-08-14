// loops or iterators

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 is best")
    }
 console.log(element);   
}


for(let i = 0 ; i<=10 ; i++){
    console.log(i);
    for(let j = 0 ; j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
  
}

let my_array = [12,13,14,15,116,117];
// console.log(my_array.length)
for (let i = 0; i < my_array.length; i++) {
    const element = my_array[i];
    console.log(element);
    
}

// While loops

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`)
    index = index + 2;
}


let whileArray = [4,5,6,7,8,9];

let i = 0;
while(i<whileArray.length){
    console.log(whileArray[i]);
    i++;
}


// do while loops

let score = 11;
do{
    console.log(`score is ${score}`)
}while(score<=10);