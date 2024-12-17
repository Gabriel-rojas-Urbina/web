
const pantallaInicio = document.getElementById("pantalla-inicio");
const contenedorPrincipal = document.getElementById("contenedor-principal");
const contenedorExamen = document.getElementById("examen");
const preguntaElemento = document.getElementById("pregunta");

// Preguntas por curso
const preguntas = {
    matematicas: ["¿Cuánto es 2 + 2?", "¿Qué número sigue al 6?", "¿Cuánto es 5 x 3?"],
    quimica: ["¿Cuál es la fórmula del agua?", "¿Qué elemento es SO₂?", "¿Qué es un átomo?"],
    biologia: ["¿Qué estudia la biología?", "¿Qué es una célula?", "¿Qué es la fotosíntesis?"],
    historia: ["¿Quién proclamó la independencia del Perú?", "¿En qué año fue la independencia?", "¿Quién fue Simón Bolívar?"],
};

let indicePregunta = 0;
let cursoActual = "";

// Función para iniciar el test
function iniciarTest() {
    pantallaInicio.style.display = "none";
    contenedorPrincipal.style.display = "flex";
}

// Función para cambiar de curso y fondo
function cambiarCurso(curso) {
    cursoActual = curso;
    indicePregunta = 0;

    const fondos = {
        matematicas: "matematicas.jpg",
        quimica: "quimica.jpg",
        biologia: "biologia.jpg",
        historia: "historia.jpg",
    };

    contenedorExamen.style.backgroundImage = `url('${fondos[curso]}')`;
    mostrarPregunta();
}

// Función para mostrar preguntas
function mostrarPregunta() {
    const listaPreguntas = preguntas[cursoActual];
    if (indicePregunta < listaPreguntas.length) {
        preguntaElemento.textContent = listaPreguntas[indicePregunta];
    } else {
        preguntaElemento.textContent = "¡Has completado el test!";
    }
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    indicePregunta++;
    mostrarPregunta();
}
