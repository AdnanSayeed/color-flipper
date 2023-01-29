const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById("btn");

const color = document.querySelector(".color");



btn.addEventListener("click" , function (){

    const RandomNum = RandomNumber();

    document.body.style.backgroundColor = colors[RandomNum];

    color.textContent = colors[RandomNum];

});


function RandomNumber(){

    return Math.floor(Math.random() * 4)

}