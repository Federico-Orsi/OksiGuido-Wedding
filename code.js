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