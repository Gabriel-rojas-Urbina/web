
const contenedorExamen = document.getElementById("examen");
const preguntaElemento = document.getElementById("pregunta");
const preguntas = {
    matematicas: ["¿Cuánto es 2 + 2?", "¿Qué número sigue al 6?"],
    quimica: ["¿Cuál es la fórmula del agua?", "¿Qué elemento es SO₂?"],
    biologia: ["¿Qué estudia la biología?", "¿Qué es una célula?"],
    historia: ["¿Quién proclamó la independencia del Perú?", "¿En qué año fue la independencia?"],
};

let indicePregunta = 0;
let cursoActual = "";

function iniciarSimulador() {
    document.getElementById("introduccion").style.display = "none";
    document.getElementById("contenedor-principal").style.display = "flex";
}

function cambiarCurso(curso) {
    cursoActual = curso;
    indicePregunta = 0;

    switch (curso) {
        case "matematicas":
            contenedorExamen.style.backgroundImage = "url('matematicas.jpg')";
            break;
        case "quimica":
            contenedorExamen.style.backgroundImage = "url('quimica.jpg')";
            break;
        case "biologia":
            contenedorExamen.style.backgroundImage = "url('biologia.jpg')";
            break;
        case "historia":
            contenedorExamen.style.backgroundImage = "url('historia.jpg')";
            break;
    }
    mostrarPregunta();
}

function mostrarPregunta() {
    const listaPreguntas = preguntas[cursoActual];
    if (indicePregunta < listaPreguntas.length) {
        preguntaElemento.textContent = listaPreguntas[indicePregunta];
        indicePregunta++;
    } else {
        preguntaElemento.textContent = "¡Has completado el test!";
    }
}
