const tituloCurso = document.getElementById("titulo-curso");
const descripcionCurso = document.getElementById("descripcion-curso");
const contenedorExamen = document.getElementById("examen");
const preguntaElemento = document.getElementById("pregunta");

const preguntas = {
    matematicas: ["¿Cuánto es 2 + 2?", "¿Qué número es par?"],
    quimica: ["¿Cuál es la fórmula del agua?", "¿Qué es el SO₂?"],
    biologia: ["¿Qué estudia la biología?", "¿Qué es una célula?"],
    historia: ["¿Quién proclamó la independencia del Perú?", "¿En qué año fue la independencia?"],
};

let indicePregunta = 0;
let cursoActual = "";

// Cambiar curso y actualizar fondo
function cambiarCurso(curso) {
    cursoActual = curso;
    indicePregunta = 0;

    switch (curso) {
        case "matematicas":
            contenedorExamen.style.backgroundImage = "url('matematicas.jpg')";
            tituloCurso.textContent = "🧮 Test de Matemáticas";
            descripcionCurso.textContent = "Responde preguntas básicas de matemáticas.";
            break;
        case "quimica":
            contenedorExamen.style.backgroundImage = "url('quimica.jpg')";
            tituloCurso.textContent = "⚗️ Test de Química";
            descripcionCurso.textContent = "Responde preguntas sobre conceptos básicos de química.";
            break;
        case "biologia":
            contenedorExamen.style.backgroundImage = "url('biologia.jpg')";
            tituloCurso.textContent = "🔬 Test de Biología";
            descripcionCurso.textContent = "Explora preguntas básicas de biología.";
            break;
        case "historia":
            contenedorExamen.style.backgroundImage = "url('historia.jpg')";
            tituloCurso.textContent = "📜 Test de Historia del Perú";
            descripcionCurso.textContent = "Responde preguntas sobre la independencia del Perú.";
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
