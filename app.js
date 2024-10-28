const shisho = document.querySelector("#form_p");
const toast  = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

let timer1, timer2;

console.log(shisho);

shisho.addEventListener('focus',variable=>{
    variable  = shisho.value;
    console.log(variable);
})
