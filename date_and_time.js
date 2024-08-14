//    Date and time

let my_date = new Date();

console.log(my_date.toDateString());

console.log(my_date.toISOString());

console.log(my_date.toLocaleDateString());

let myCreatedDate = new Date(2023,0,23);

console.log(myCreatedDate.toDateString);

let myTimeStamp = Date.now();

console.log(myTimeStamp);

//  agr date my months chahe

let newDate = new Date();
console.log(newDate.getMonth);
console.log(newDate.getSeconds);


// important

newDate.toLocaleString('default',{
    weekday :"long"
})

