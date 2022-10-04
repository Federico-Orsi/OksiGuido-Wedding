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
let countdownContainer = document.getElementById("countdownContainer");

const showCountDown = (deadLine) => {

const timer = setInterval(() => {
tiempo = calcularTiempoRestante(deadLine);
countdownContainer.innerHTML = `${tiempo.diasRestantes} ${tiempo.horasRestantes} ${tiempo.minutosRestantes} ${tiempo.segundosRestantes}`;
countdownContainer.style.color = "white";

if(tiempo.tiempoRestante <= 1){
    clearInterval(timer);
}
},1000)    

}


showCountDown('Nov 05 2022 18:00:00 GMT-0300');