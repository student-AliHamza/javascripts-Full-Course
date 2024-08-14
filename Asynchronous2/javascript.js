// setInterval(function(){
//     // console.log("hello hamza",Date())
// },2000)


const saydate = function(str){
    console.log(str,Date());
}

const inter = setInterval(saydate,1000,"hi we are the supper man")



document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(inter)
})
document.querySelector("#start").addEventListener('click',function(){
    const inter = setInterval(saydate,1000,"hi we are the supper man")

})

