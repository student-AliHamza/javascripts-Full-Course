// generate a random color

const randomColor = function (){
 const  hex = '0123456789ABCDEF';
 let color = '#';
 for(let i = 0;i<6;i++){
    color += hex[Math.floor(Math.random() * 16)]
 }

 return color;
};


let intervelID
const startchangecolor = function(){
if(!intervelID){
    intervelID =  setInterval(changebgcolor,1000)

}
    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();

    }

};
const stopchangecolor = function(){
    clearInterval(intervelID)
    intervelID = null;
   
}

document.querySelector('#start').addEventListener('click',startchangecolor)
document.querySelector('#stop').addEventListener('click',stopchangecolor)