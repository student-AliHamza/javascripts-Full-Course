// ajax ur XMLHttp request my code likha jata ha



// ES SY HUM DATA send kar sakty ha ur receive kar sakty ha
const  requesturl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
// open my do parameters lagty ha ik method ur dosri string
xhr.open('GET',requesturl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        console.log(this.responseText)
    }

}
xhr.send()