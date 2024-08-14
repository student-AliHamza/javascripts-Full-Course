//   Arrays

const my_array = [0,1,2,3,4,5,6];

const my_heros = ['skh','nagar'];
console.log(my_array[0]);

const myArray2 = new Array(1,2,3,4);

console.log(myArray2);


//  Array methods

// push ka matlab array ky last my 7 add kr dena
myArray2.push(7);
console.log(myArray2);
// pop last value ko remove kr deta ha
myArray2.pop();

// unshift ka matlab starting my add kr dena

myArray2.unshift(9);
// shift ka matlab starting sy remove kr dena
myArray2.shift();


// check karny ky le 9 includes ha kh nahi
console.log(myArray2.includes(9));

// 9 kis index per ha check karny ky le
console.log(myArray2.indexOf(9));


// agr numbers ko string my change karna ho
const newArr = my_array.join();

console.log(newArr);


// Slice  and splice

// slice my last range print nahi hoti

// splice my last range print hoti ha but orignal array my sy splice remove kr deta ha

console.log("A",my_array);

const myarr1 =my_array.slice(1,3);

console.log(myarr1);

console.log("b",my_array);

const myarr2 =my_array.splice(1,3);
console.log("C",my_array);
console.log(myarr2);


const heros = ['spiderman','ironman','doremon'];
const cartoon = ['moto_patlo','shiva','rudra']


// heros.push(cartoon);
// console.log(heros)


const new_hero = heros.concat(cartoon);
console.log(new_hero);

// spread opreator  ka easy method

const all_new_hero = [...heros, ...cartoon];
console.log(all_new_hero);

// flat means array ky ander jitny bi array ho usy print karta ha

const new_array = [1,2,3,[4,5,6,[7,8,9]]];

const all_new_array = new_array.flat(Infinity);
console.log(all_new_array);



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));