// javascript ky ander jitny bi events hoty ha wo sequentional run hota


// this is not good approch is le hamy evnts lagany hoty ha

// document.getElementById('Thankyou').onclick = function(){
//     alert("owl clicked")
// }


// document.getElementById('Thankyou').addEventListener('click',function(){
//     alert("clicked again in thankyou")
// })




// attachEvent();
// jQuery
//    ********************You learn these below code****************************

// type , timestamp , defaultPrevented
// target , toElement , srcElement , currentTarget
// clientX ,clintY , screenX , screenY
// altKey ,ctrlKey ,shiftKey , KeyCode


// events my 3 parameter hoty ha         3rd parameter default hota true or false

// document.getElementById('Thankyou').addEventListener('click',function(e){
//     alert(e);
// },true)
// document.getElementById('Thankyou').addEventListener('click',function(e){
//     alert(e);
// },false);




// document.getElementById('Thankyou').addEventListener('click',function(e){
//     alert(e);
// })

        // Events two types
//   Event bubbling Event(ye nechy sy upper ki tarf bubble banata ha)
//   Event Capturing


//  ye us waqat click
document.getElementById('images').addEventListener('click',function(e){
    console.log("clicked inside the ul");
})
document.getElementById('Thankyou').addEventListener('click',function(e){
    console.log("Thankyou clicked");

    // stop propagation ka matlab ye bubble sort ko khatam kar deta ha

    // e.stopPropagation();
})

document.getElementById('google').addEventListener('click',function (e){
    // e.preventDefault();
    // e.stopPropagation();
    console.log("google clicked");

},false)

document.querySelector('#images').addEventListener('click',function(e){

    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        let removei = e.target.parentNode
        removei.remove();
    }
   
        
    // removei.parentNode.removeChild(remove);

},false)


