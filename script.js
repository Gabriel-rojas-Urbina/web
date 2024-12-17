
const pantallaInicio = document.getElementById("pantalla-inicio");
const contenedorPrincipal = document.getElementById("contenedor-principal");
const contenedorExamen = document.getElementById("examen");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");

// Preguntas por curso con respuestas
const preguntas = {
    matematicas: [
        { pregunta: "¿Cuánto es 2 + 2?", opciones: ["3", "4", "5"], respuesta: "4" },
        { pregunta: "¿Qué número sigue al 6?", opciones: ["5", "7", "8"], respuesta: "7" }
    ],
    quimica: [
        { pregunta: "¿Cuál es la fórmula del agua?", opciones: ["CO₂", "H₂O", "O₂"], respuesta: "H₂O" },
        { pregunta: "¿Qué elemento es SO₂?", opciones: ["Oxígeno", "Sulfuro", "Dióxido de azufre"], respuesta: "Dióxido de azufre" }
    ]
};

let indicePregunta = 0;
let cursoActual = "";
let puntaje = 0;

// Función para iniciar el test
function iniciarTest() {
    pantallaInicio.style.display = "none";
    contenedorPrincipal.style.display = "flex";
}

// Función para cambiar de curso y fondo
function cambiarCurso(curso) {
    cursoActual = curso;
    indicePregunta = 0;
    puntaje = 0;

    const fondos = {
        matematicas: "matematicas.jpg",
        quimica: "quimica.jpg",
        biologia: "biologia.jpg",
        historia: "historia.jpg",
    };

    contenedorExamen.style.backgroundImage = `url('${fondos[curso]}')`;
    mostrarPregunta();
}

// Función para mostrar preguntas y opciones
function mostrarPregunta() {
    const listaPreguntas = preguntas[cursoActual];
    if (indicePregunta < listaPreguntas.length) {
        const preguntaActual = listaPreguntas[indicePregunta];
        preguntaElemento.textContent = preguntaActual.pregunta;
        opcionesElemento.innerHTML = "";
        preguntaActual.opciones.forEach(opcion => {
            const boton = document.createElement("button");
            boton.textContent = opcion;
            boton.onclick = () => verificarRespuesta(opcion, preguntaActual.respuesta);
            opcionesElemento.appendChild(boton);
        });
    } else {
        preguntaElemento.textContent = `¡Test completado! Puntaje: ${puntaje}/${preguntas[cursoActual].length}`;
        opcionesElemento.innerHTML = "";
    }
}

// Verificar la respuesta
function verificarRespuesta(opcionSeleccionada, respuestaCorrecta) {
    if (opcionSeleccionada === respuestaCorrecta) {
        puntaje++;
    }
    indicePregunta++;
    mostrarPregunta();
}
