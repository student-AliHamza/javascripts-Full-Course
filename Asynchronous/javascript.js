// function kia hoty ha


// ye 2 second bad ik bar print hota


// setTimeout(function(){
//     console.log('Hitesh')
// },2000);



// aksar websites per sunddenely koi chez ati ha ye course ly lo 
const sayHitesh = function(){
    console.log("Hitesh");
}
const changetext = function(){
    document.querySelector('h1').innerHTML = "best javascript series";
}
setTimeout(sayHitesh,2000)
const changeme = setTimeout(changetext,2000)


// agar koi chez stop karni ho to
document.querySelector("#stop").addEventListener('click',function(){
    clearTimeout(changeme)
})

