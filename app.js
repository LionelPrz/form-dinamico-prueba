  // variables para el dark mode
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('switch');
  const themeText = document.querySelector('.header-dark-theme p'); // Elemento de texto del modo
  // Variables para seccion clima
  let temperatura = document.getElementById('temperature');
  let ubicacion = document.getElementById('location');
  let descripcion = document.getElementById('description');
  let image = document.getElementById('image');
  let lon = -58.65306;
  let lat =  -28.751389;
  let key = '9588893d32e1c6900e83cbb514ec110c';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=es&units=metric`
  // Variables seccion reloj
  let time = document.getElementById('time');
  let date = document.getElementById('date');
  let fecha = new Date();
  let dia = fecha.getDate();
  let semana = fecha.getDay();
  let hora = fecha.getHours();
  let minuto = fecha.getMinutes();

  // Variables para la generacion del texto dinamico
  let formD = document.querySelector(".brutalist-form");
  let spamD = document.getElementById("span-f");
  let ident;
  let valorC;
  // Funcion para tener la aplicacion de clima en la app
window.addEventListener('load',()=>{

        fetch(url)
          .then(response =>{return response.json()})
          .then(data =>{

            let temp = Math.round(data.main.temp);
                temperatura.textContent = `${temp} ° C`;
            let desc = data.weather[0].description;
                descripcion.textContent = desc.toUpperCase();
                ubicacion.textContent = data.name;
            
            // Iconos animados
            switch(data.weather[0].main){
              case 'Clear':
                image.src = './assets/animated/day.svg'
                console.log('limpio');
                break;
              case 'Clouds':
                image.src = './assets/animated/cloudy-day-1.svg'
                console.log('nubes');
                break;
              case 'Rain':
                image.src = './assets/animated/rainy-7.svg'
                console.log('lluvia');
                break;
              case 'Drizzle':
                image.src = './assets/animated/rainy-2svg'
                console.log('llovizna');
                break;
              case 'Snow':
                image.src = './assets/animated/snowy-6svg'
                console.log('nieve');
                break;
              case 'Thunderstorm':
                image.src = './assets/animated/thunder.svg'
                console.log('tormenta');
                break;
              case 'Atmosphere':
                image.src = './assets/animated/weather.svg'
                console.log('atmosfera');
                break;
              default:
                image.src = './assets/animated/cloudy-day-1.svg'
                console.log('defercto');
                break;
            }
          })
          .catch(error =>{
            console.log(error);
          })
      });


      const mostrarHora = () =>{

    
        // Hacemos una relacion entre el string de day y los dias en texto
        let dias = ['DOMINGO ','LUNES ','MARTES ','MIERCOLES ','JUEVES ','VIERNES ','SABADO '];
        let mostrarSemana = (dias[semana]);
    
        date.innerHTML = `${mostrarSemana}${String(dia).padStart(2,'0')}`
        time.innerHTML = `${String(hora).padStart(2,'0')} : ${String(minuto).padStart(2,'0')}`;
      }
        setInterval(()=>
          mostrarHora(),1000);

// Modo oscuro usando local storage

// Función para activar el modo oscuro
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  themeText.textContent = "Modo Claro"; // Cambia el texto a "Modo Claro"
  themeSwitch.checked = true; // Marca el toggle
  localStorage.setItem('darkmode', 'active');
}

// Función para desactivar el modo oscuro
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  themeText.textContent = "Modo Oscuro"; // Cambia el texto a "Modo Oscuro"
  themeSwitch.checked = false; // Desmarca el toggle
  localStorage.setItem('darkmode', null);
}

// Verifica el estado de darkmode al cargar la página
if (darkmode === "active") enableDarkmode();

// Evento de cambio en el toggle para cambiar el tema
themeSwitch.addEventListener("change", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// let formD = document.querySelector('.brutalist-form');

formD.addEventListener('click',(e)=>{
  ident = e.target.id;

  const textDinamic=[{
    id:"nombre",
    texto:"Estamos en el campo nombre por lo tanto veremos dijo el ciego"
  },
  {
    id:"apellido",
    texto:"Estamos en el campo apellido por lo tanto veremos dijo el ciego"
  },
  {
    id:"dni",
    texto:"Estamos en el campo dni por lo tanto veremos dijo el ciego"
  },
  {  id:"telefono",
    texto:"Estamos en el campo telefono por lo tanto veremos dijo el ciego"
  },
  {
    id:"selectBarrio",
    texto:"Estamos en el campo barrio por lo tanto veremos dijo el ciego"
  },
  {
    id:"selectQueja",
    texto:"Estamos en el campo queja por lo tanto veremos dijo el ciego"
  },
  {
    id:"textArea",
    texto:"Estamos en el campo Texto por lo tanto veremos dijo el ciego"
  }
  ];

  valorC = textDinamic.find(electo => electo.id === ident);

  console.log(valorC.id);
  console.log(valorC.texto);

    console.log(valorC.texto.length);

  generarTexto();
});

function generarTexto(){

  spamD.insertAdjacentHTML("afterend",`
    <span class="dinamic-span">${valorC.texto}</span>
  `);
}
