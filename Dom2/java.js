// Relations 
//******************** */ agr parent class access karni ho to
const parent = document.querySelector('.parent');
// console.log(parent);



//********************** */ agr parent ky children access karny ho to
// console.log(parent.children);

//********************** */ agr children ka 1 number acces karna ho to
// console.log(parent.children[1].innerHTML);

// ***************agr loops lagana ho to
for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i]);
    
}

parent.children[1].style.color = "orange";



// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);



const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);


// agar nodes ky child dekhna ho to
// console.log('Nodes',parent.childNodes);




// agr koi div create karni ho to ya kosh ur
const div = document.createElement('div');
console.log(div);

// agr div per koi className enter karni ho to

div.className = "main";
div.id = "my1"

div.id = Math.random() * 1 + 1;



// div abi memory ky ander ha page per nahi aa rahi ha
div.setAttribute("title" , "generated title");
div.style.backgroundColor = "green"
div.style.padding = "12px";
div.innerText = "chi ur code";



const addtext = document.createTextNode("chai ur code");
div.appendChild(addtext);

document.body.appendChild(div)

