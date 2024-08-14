// function addlanguage(langName){
// const li =  document.createElement('li')
//    li.innerHTML = "python"
//    document.querySelector('.language').appendChild(li);
// }
// addlanguage("python");
// document.querySelector('.language')

// function optilanguage(langName){
//  const li = document.createElement('li')
//  li.appendChild(document.createTextNode(langName));
//  document.querySelector('.language').appendChild(li);

// }
// optilanguage('golang');

// edit


const secondLang =document.querySelector("li:nth-child(1)")
const  newli = document.createElement('li');
newli.textContent = "Mojo";
secondLang.replaceWith(newli);


const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeScript</li>'


// Remove

const lastlang = document.querySelector('li:last-child')
firstLang.remove()