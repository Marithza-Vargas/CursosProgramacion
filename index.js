import Curso from "./clases1/Curso.js";
const javascript = new Curso("Curso de JavaScript", "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg", 10);
console.log(javascript);

const element = document.getElementById("curso"); //Obtener el elemento del DOM
element.innerHTML = `<img src="${javascript.getImagenMiniatura()}" alt="${javascript.getNombre()}"/> <h3>${javascript.getNombre()}</h3> <span>Total de clases: ${javascript.getNumeroClases()} clases</span>`;