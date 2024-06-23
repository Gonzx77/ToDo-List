import { maquetar, add, remove, status } from "./modules/app.js";
await maquetar();


let addBtn = document.querySelector("#sBS2");

addBtn.addEventListener("click", async() => {
    let task = document.querySelector("#searchinput");
    task = task.value;

    await add(task);
    await(maquetar());
});

const removeElement = async(element) =>{
    let id = element.id;

    await(remove(id));
    await(maquetar());
};
document.removeElement = removeElement;

const finished = async(element) =>{
    let id = element.id;

    await status(id);
    await maquetar();
};
document.finished = finished;


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