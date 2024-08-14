//    conversions and confusion datatypes


"use strict";


let score = "123abc";


console.log(typeof score);
console.log(typeof(score));

let value_in_number = Number(score)
console.log(typeof value_in_number);


console.log(value_in_number);


// "33" ko 33 me easily convert ho jata
// "33abc" =>  NaN  easily convet nahi hoti
// true ha tu 1   false ha to 0

let islogged = 1
let booleanIslogged = Boolean(islogged)
console.log(booleanIslogged);

let cv_code = 0

let change = Boolean(cv_code);
console.log(change);

