//  for each return value nahi karta


const coding = ['js', 'rubby', 'java', 'python', 'cpp']

coding.forEach(item => {
    console.log(item)
    
});


// filters operations  ******** filter my function ky bad conditions deni parti ha


const mynumbers = [1,2,3,4,55,6,6];

mynumbers.filter( (num)=> num > 4);
console.log(mynumbers)


// *********** agr culi brackets ky ander return nahi likhy gy to print nahi ho ga***********

const myNewnumbers = [1,2,3,4,55,6,6];

myNewnumbers.filter( (num)=> {return num > 4});
console.log(myNewnumbers)




// ***********maps in javascript ******************

const my_numbers = [1,2,3,4,5,6,7,8,9,10];


const newNumbr = my_numbers.map( (num)=> num + 10 )
                           .map((num)=>num + 1)
                           .filter((num)=>num>=20)
console.log(newNumbr);

// chani


// chani ka matlab map ky bad map laga dena ya map ky bad filter laga dena


// reduce methods         used in shopping cart


const myNums = [1,2,3]

const mytotal = myNums.reduce((accumulators , currentValue)=>{
    console.log(`acc ${accumulators} and cuurentValue ${currentValue}`)
    return accumulators + currentValue
}, 2)

console.log(mytotal);


// shopping cart

const shopping_cart = [
     {
        item_name : "python_course",
         price : 999
     },
     {
        item_name : "java_course",
         price : 9590
     },
     {
        item_name : "data_course",
         price : 9234
     },
     {
        item_name : "app_course",
         price : 23456
     }

]

const total_shopping = shopping_cart.reduce((accumulators,item)=>{
   return accumulators + item.price;

},0)

console.log(total_shopping);