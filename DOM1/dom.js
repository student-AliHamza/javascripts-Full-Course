// window ky ander document hota ur document ky ander html hota html ky ander body ur head hota 

// agr koi value get karni ho to getElementById

document.getElementById('title')

document.getElementById('title').class

document.getElementById('title').className;

document.getElementById('title').getAttribute('id')


// agr koi value set karni ho attributes ky sath

document.getElementById('title').setAttribute('class' , 'test heading');



// agr koi background color dena ho to ya style dena ho



title.style.backgroundColor = 'green';

title.style.borderRadius = '5px';

title.style.padding = '15px';


// agr koi div ky ander content lena ho

title.textContent
// '\n       Dom learning on chai ur code \n       this is loream ipsum\n\n       '
title.innerHTML
// '\n       <h1>Dom learning on chai ur code </h1>\n       <p>this is loream ipsum</p>\n\n       '
title.innerText
// 'Dom learning on chai ur code\n\nthis is loream ipsum'



// agr class selectors  ky sath select karna ho to 
document.getElementsByClassName('heading');


// agr sary slect karny ho to
document.querySelector('h1');



document.querySelector('input[type = "passward"]');


document.querySelector('p:first-child');


// agr koi unorder list select karna ho to
document.querySelector('ul');

// agr unorderlist ki list check karni ho to
const myul = document.querySelector('li');

myul.querySelector('li')


const turngreen = myul.querySelector('li');

// agr koi color change karna ho to
turngreen.style.backgroundColor = "green";

turngreen.style.padding = "10px";


// agr inner text ko change karna ho to
turngreen.innerText = "five"

// *******************Query selector All****************


document.querySelectorAll('li');



document.querySelectorAll('li');
// NodeList(3) [li, li, li]
const temp = document.querySelectorAll('li');
temp

temp.forEach(function (li) {
    li.style.backgroundColor = "green";
    
});

const tempClassname =document.getElementsByClassName('list_item');
Array.from(tempClassname)


myconvertArray.forEach((li)=>{
    li.style.color = "style";
})