// const shisho = document.querySelectorAll("input[id],select[id]");
const toast  = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
const form = document.querySelector('#form_p');

let timer1, timer2;

form.addEventListener('click',(e)=>{
    console.log(e.target);
    instructivo();
});


function instructivo(){
        toast.classList.add("active");
        progress.classList.add("active");
        timer1 = setTimeout(() => {
            toast.classList.remove("active");
          }, 5000); //1s = 1000 milliseconds
        
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5000);
    }

//     toast.classList.add("active");
    // shisho.addEventListener("focus", () => {
    //     console.log('click 1')
    //   toast.classList.add("active");
    //   progress.classList.add("active");
    
    
    // closeIcon.addEventListener("click", () => {
    //     console.log('click para cerrar la alerta ya sea manual o automaticamente.')
    //   toast.classList.remove("active");
    
    //   setTimeout(() => {
    //     progress.classList.remove("active");
    //   }, 300);
    
    //   clearTimeout(timer1);
    //   clearTimeout(timer2);
    // });
    
// }

// closeIcon.addEventListener("click", () => {
//     console.log('click para cerrar la alerta ya sea manual o automaticamente.')
//   toast.classList.remove("active");

//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 300);

//   clearTimeout(timer1);
//   clearTimeout(timer2);
// });
