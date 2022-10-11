// Calculador de Tiempo restante en MiliSegundos
const calcularTiempoRestante = (deadLine) =>{

    let now = new Date ();
    tiempoRestante = (new Date (deadLine) - now + 1000)/1000;
    segundosRestantes = ('0' + Math.floor(tiempoRestante % 60)).slice(-2);
    minutosRestantes = ('0' + Math.floor(tiempoRestante / 60 % 60)).slice(-2);
    horasRestantes = ('0' + Math.floor(tiempoRestante / 3600 % 24)).slice(-2);
    diasRestantes = Math.floor(tiempoRestante / 86400);

return {
tiempoRestante, 
segundosRestantes,
minutosRestantes,
horasRestantes,
diasRestantes,
}

}

console.log(calcularTiempoRestante('Nov 05 2022 18:00:00 GMT-0300'));

// Mostrar CountDown en Pantalla
let countdownDias = document.getElementById("countdownDias");
let countdownHoras = document.getElementById("countdownHoras");
let countdownMinutos = document.getElementById("countdownMinutos");
let countdownSegundos = document.getElementById("countdownSegundos");

const showCountDown = (deadLine) => {

const timer = setInterval(() => {
tiempo = calcularTiempoRestante(deadLine);
countdownDias.innerHTML = `${tiempo.diasRestantes}`;
countdownHoras.innerHTML = `${tiempo.horasRestantes}`;
countdownMinutos.innerHTML = `${tiempo.minutosRestantes}`;
countdownSegundos.innerHTML = `${tiempo.segundosRestantes}`;

if(tiempo.tiempoRestante <= 1){
    clearInterval(timer);
}
},1000)    

}


showCountDown('Nov 05 2022 18:00:00 GMT-0300');


// Mostrar CBU en Seccion Regalos:

let cbu = document.getElementById("cbu");
let divDatosBancarios = document.getElementById("divDatosBancarios");
let spanDesplegable = document.getElementById("spanDesplegable");

const mostrarCbu = () => {

divDatosBancarios.onclick = () =>{

    cbu.innerHTML = "CBU 0720037388000012330672"
    cbu.style.color = "white"
    
    spanDesplegable.innerHTML = `<strong>-</strong>`;
    ocultarCbu();    
} 
}

mostrarCbu();

const ocultarCbu = () =>{
    divDatosBancarios.onclick = () =>{
      cbu.innerHTML = "";
      spanDesplegable.innerHTML = `<strong>+</strong>`;
      mostrarCbu();
    }
}

//Vestimenta
let hombres = document.getElementById("hombres");
let mujeres = document.getElementById("mujeres");
let divFotosHombres = document.getElementById("divFotosHombres");
let divFotosMujeres = document.getElementById("divFotosMujeres");

const mostrarVestimentaMujeres = () => {
    mujeres.onclick = () =>{
     divFotosHombres.innerHTML = "";
     divFotosMujeres.innerHTML = `
     <img id="imgMujer1" src="./img/elegante-sport-woman.jpg" alt="woman">
     <img id="imgMujer2" src="./img/elegante-sport-women.jpg" alt="women">
      `;
      
    }
    
    }

const mostrarVestimentaHombres = () => {
hombres.onclick = () =>{
  divFotosMujeres.innerHTML = "";
  divFotosHombres.innerHTML = `
  <img id="imgHombre1" src="./img/elegante-sportHombre.jpg" alt="hombre">
  <img id="imgHombre2" src="./img/elegante-sportHombres.jpg" alt="hombres">
  `;
  
}

}

mostrarVestimentaHombres();
mostrarVestimentaMujeres();


// fetch (Post) al hacer el Submit:

// Varibles:
let formulario = document.getElementById("formulario");
let Nombre = document.getElementById("Nombre");
let Apellido = document.getElementById("Apellido");
let Email = document.getElementById("Email");
let Celular = document.getElementById("Celular");
let Edad = document.getElementById("Edad");
let Menu = document.getElementById("Menu");
let Asistencia = document.getElementById("Asistencia");
let mensajeParaNovios = document.getElementById("mensajeParaNovios");



formulario.onsubmit = (e) =>{
  e.preventDefault(); 

  if ((Edad.value != "Edad") && (Menu.value != "Tipo de Menú") && (Asistencia.value != "Asistencia")){

fetch("https://formsubmit.co/ajax/federicoantonio.orsi@gmail.com",
 {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        Nombre: Nombre.value,
        Apellido: Apellido.value,
        Email: Email.value,
        Celular: Celular.value,
        Edad: Edad.value,
        Menu: Menu.value,
        Asistencia: Asistencia.value,
        mensajeParaNovios: mensajeParaNovios.value,
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
   
    fetch("https://formsubmit.co/ajax/camisolguerra@gmail.com",
    {
       method: "POST",
       headers: { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
       body: JSON.stringify({
           Nombre: Nombre.value,
           Apellido: Apellido.value,
           Email: Email.value,
           Celular: Celular.value,
           Edad: Edad.value,
           Menu: Menu.value,
           Asistencia: Asistencia.value,
           mensajeParaNovios: mensajeParaNovios.value,
       })
   })
       .then(response => response.json())
       .then(data => console.log(data))

    Swal.fire({
      icon: 'success',
      title: 'Gracias ' + Nombre.value + ', tus datos se enviaron correctamente a los Novios!!',
      // text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
      
    })

   formulario.reset();
   
  }
  else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor debes elegir una Opción en todos los Campos Seleccionables. Gracias!!',
        
      })
      
  }
}
  