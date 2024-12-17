const pantallaInicio = document.getElementById("pantalla-inicio");
const contenedorPrincipal = document.getElementById("contenedor-principal");
const cursoImagen = document.getElementById("curso-imagen");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const resultadoElemento = document.getElementById("resultado");

const preguntas = {
    matematicas: Array.from({ length: 20 }, (_, i) => ({
        pregunta: `¿Cuánto es ${i + 1} x ${i + 2}?`,
        opciones: ["10", `${(i + 1) * (i + 2)}`, "30"],
        respuesta: `${(i + 1) * (i + 2)}`
    })),
    quimica: [
        { pregunta: "¿Cuál es el símbolo del agua?", opciones: ["O2", "H2O", "CO2"], respuesta: "H2O" },
        { pregunta: "¿Qué gas respiramos?", opciones: ["Nitrógeno", "Oxígeno", "Dióxido de Carbono"], respuesta: "Oxígeno" }
    ],
    biologia: [
        { pregunta: "¿Qué estudia la biología?", opciones: ["Células", "Metales", "Organismos vivos"], respuesta: "Organismos vivos" },
        { pregunta: "¿Cuál es el órgano más grande?", opciones: ["Piel", "Cerebro", "Corazón"], respuesta: "Piel" }
    ],
    historia: [
        { pregunta: "¿En qué año se independizó Perú?", opciones: ["1821", "1810", "1830"], respuesta: "1821" },
        { pregunta: "¿Quién fue José de San Martín?", opciones: ["Libertador", "Presidente", "Rey"], respuesta: "Libertador" }
    ]
};

let cursoActual = "";
let puntaje = 0;
let indicePregunta = 0;

function iniciarTest() {
    pantallaInicio.style.display = "none";
    contenedorPrincipal.style.display = "flex";
}

function cambiarCurso(curso) {
    cursoActual = curso;
    indicePregunta = 0;
    puntaje = 0;
    document.body.style.backgroundImage = `url('${curso}.jpg')`;
    cursoImagen.src = `${curso}.jpg`;
    mostrarPregunta();
}

function mostrarPregunta() {
    const preguntaActual = preguntas[cursoActual][indicePregunta];
    preguntaElemento.textContent = preguntaActual.pregunta;
    opcionesElemento.innerHTML = "";
    resultadoElemento.style.display = "none";

    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.onclick = () => verificarRespuesta(opcion, preguntaActual.respuesta);
        opcionesElemento.appendChild(boton);
    });
}

function verificarRespuesta(opcion, respuesta) {
    resultadoElemento.textContent = opcion === respuesta ? "¡Respuesta Correcta!" : "Respuesta Incorrecta";
    resultadoElemento.style.display = "block";
    if (opcion === respuesta) puntaje++;
    setTimeout(siguientePregunta, 1000);
}

function siguientePregunta() {
    indicePregunta++;
    if (indicePregunta < preguntas[cursoActual].length) {
        mostrarPregunta();
    } else {
        preguntaElemento.textContent = `¡Test completado! Tu puntaje es: ${puntaje} / 20`;
        opcionesElemento.innerHTML = "";
        resultadoElemento.style.display = "none";
    }
}
