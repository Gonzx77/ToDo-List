let container = document.querySelector("#date");

function actualizarFechaHora() {
    let fechaHoraActual = new Date();
    let añoActual = fechaHoraActual.getFullYear();
    let mesActual = fechaHoraActual.getMonth() + 1;
    let diaActual = fechaHoraActual.getDate();
    let horaActual = fechaHoraActual.getHours();
    let minutosActuales = fechaHoraActual.getMinutes();
    let segundosActuales = fechaHoraActual.getSeconds();

    let fecha = diaActual + "/" + mesActual + "/" + añoActual;
    let hora = horaActual + ":" + minutosActuales + ":" + segundosActuales;

    container.innerHTML = fecha + " - " + hora;
}
actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);