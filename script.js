
const pantallaInicio = document.getElementById("pantalla-inicio");
const contenedorPrincipal = document.getElementById("contenedor-principal");
const cursoImagen = document.getElementById("curso-imagen");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const resultadoElemento = document.getElementById("resultado");

const preguntas = {
    matematicas: [
        { pregunta: "¿Cuál es el valor de pi (π) hasta dos decimales?", opciones: ["3.14", "3.16", "3.18"], respuesta: "3.14" },
        { pregunta: "¿Cuánto es 7 x 8?", opciones: ["56", "54", "58"], respuesta: "56" },
        { pregunta: "¿Qué resultado se obtiene al resolver 12 ÷ 3?", opciones: ["3", "4", "5"], respuesta: "4" },
        { pregunta: "¿Cuál es el área de un triángulo con base 6 cm y altura 8 cm?", opciones: ["24 cm²", "48 cm²", "18 cm²"], respuesta: "24 cm²" },
        { pregunta: "¿Cuántos grados tiene un ángulo recto?", opciones: ["90", "180", "45"], respuesta: "90" },
        { pregunta: "¿Cuánto es 25% de 200?", opciones: ["50", "60", "40"], respuesta: "50" },
        { pregunta: "¿Cuánto es 15²?", opciones: ["225", "2250", "250"], respuesta: "225" },
        { pregunta: "¿Cuánto es 9 + 16?", opciones: ["25", "26", "24"], respuesta: "25" },
        { pregunta: "¿Qué es el perímetro de un cuadrado con lados de 5 cm?", opciones: ["20 cm", "25 cm", "30 cm"], respuesta: "20 cm" },
        { pregunta: "¿Cuánto es 4³?", opciones: ["64", "16", "12"], respuesta: "64" },
        { pregunta: "¿Cuál es el resultado de 45 ÷ 5?", opciones: ["9", "8", "10"], respuesta: "9" },
        { pregunta: "¿Cuántos centímetros hay en un metro?", opciones: ["100", "1000", "10"], respuesta: "100" },
        { pregunta: "¿Cuántos lados tiene un hexágono?", opciones: ["6", "8", "5"], respuesta: "6" },
        { pregunta: "¿Qué es el área de un círculo con radio de 7 cm?", opciones: ["153.94 cm²", "145.44 cm²", "140.12 cm²"], respuesta: "153.94 cm²" },
        { pregunta: "¿Cuál es la raíz cuadrada de 144?", opciones: ["12", "14", "10"], respuesta: "12" },
        { pregunta: "¿Cuánto es 3/4 + 1/4?", opciones: ["1", "2", "3"], respuesta: "1" },
        { pregunta: "¿Qué número es el siguiente en la secuencia 2, 4, 6, 8, ...?", opciones: ["10", "12", "11"], respuesta: "10" },
        { pregunta: "¿Cuánto es 3² + 4²?", opciones: ["25", "20", "18"], respuesta: "25" },
        { pregunta: "¿Cuál es el valor de la expresión 5x - 2, si x = 3?", opciones: ["13", "15", "17"], respuesta: "13" },
        { pregunta: "¿Qué es el volumen de un cubo con lado de 4 cm?", opciones: ["64 cm³", "48 cm³", "36 cm³"], respuesta: "64 cm³" }
    ],
    quimica: [
        { pregunta: "¿Cuál es el símbolo del agua?", opciones: ["O2", "H2O", "CO2"], respuesta: "H2O" },
        { pregunta: "¿El deuterio y el tritio son?", opciones: ["Elementos de la tabla periódica", "Satélites de Marte", "Isótopos del hidrógeno"], respuesta: "Isótopos del hidrógeno" },
        { pregunta: "¿El número atómico Z?", opciones: ["El número de electrones de un átomo", "El número de protones de un átomo", "El número de neutrones de un átomo"], respuesta: "El número de protones de un átomo" },
        { pregunta: "¿Cuál es la carga del electrón?", opciones: ["Negativa", "Positiva", "Neutro"], respuesta: "Negativa" },
        { pregunta: "¿Cuál es el símbolo del elemento galio?", opciones: ["G", "Gl", "Ga"], respuesta: "Ga" },
        { pregunta: "¿Cuál es el elemento con símbolo Fe?", opciones: ["Hierro", "Fermio", "Felonio"], respuesta: "Hierro" },
        { pregunta: "¿El átomo está compuesto por:?", opciones: ["Fotones, gluones, fermiones", "Isótopos y elementos", "Protones, neutrones y electrones"], respuesta: "Protones, neutrones y electrones" },
        { pregunta: "¿Cuántos elementos se han descubierto en la Tierra?", opciones: ["118", "119", "116"], respuesta: "118" },
        { pregunta: "¿La unión de dos elementos forman?", opciones: ["Una solución", "Un compuesto", "Una mezcla"], respuesta: "Un compuesto" }
    ],
    biologia: [
        { pregunta: "¿Qué estudia la biología?", opciones: ["Células", "Metales", "Organismos vivos"], respuesta: "Organismos vivos" },
        { pregunta: "¿Cuál de los siguientes es un ejemplo de un organismo autótrofo?", opciones: ["Bacteria", "Animal", "Planta"], respuesta: "Planta" },
        { pregunta: "¿En qué parte de la célula ocurre la síntesis de proteínas?", opciones: ["Retículo endoplasmático rugoso", "Mitocondria", "Golgi"], respuesta: "Retículo endoplasmático rugoso" },
        { pregunta: "¿Qué tipo de célula tiene un núcleo definido?", opciones: ["Procariota", "Eucariota", "Ninguna"], respuesta: "Eucariota" },
        { pregunta: "¿Cuál es la función principal de los glóbulos rojos?", opciones: ["Transporte de oxígeno", "Producción de hormonas", "Digestión de nutrientes"], respuesta: "Transporte de oxígeno" },
        { pregunta: "¿Cuál es la principal fuente de energía para la fotosíntesis?", opciones: ["Luz solar", "Calor", "Oxígeno"], respuesta: "Luz solar" },
        { pregunta: "¿Qué es un gen?", opciones: ["Un fragmento de ARN", "Una célula", "Una secuencia de ADN que codifica para una proteína"], respuesta: "Una secuencia de ADN que codifica para una proteína" },
        { pregunta: "¿Cuál es el principal componente de las membranas celulares?", opciones: ["Ácidos nucleicos", "Lípidos", "Proteínas"], respuesta: "Lípidos" },
        { pregunta: "¿Cuál es el órgano más grande?", opciones: ["Piel", "Cerebro", "Corazón"], respuesta: "Piel" }
    ],
    historia: [
        { pregunta: "¿En qué año se independizó Perú?", opciones: ["1821", "1810", "1830"], respuesta: "1821" },
        { pregunta: "¿Quién fue el primer presidente de la República del Perú?", opciones: ["Simón Bolívar", "José de la Riva-Agüero", "Ramón Castilla"], respuesta: "José de la Riva-Agüero" },
        { pregunta: "¿Quién fue el líder de la Revolución de 1824 en el Perú?", opciones: ["Simón Bolívar", "Andrés de Santa Cruz", "Ramón Castilla"], respuesta: "Ramón Castilla" },
        { pregunta: "¿Qué conflicto bélico enfrentó el Perú contra Chile entre 1879 y 1884?", opciones: ["Guerra con Colombia", "Guerra de la Independencia", "Guerra del Pacífico"], respuesta: "Guerra del Pacífico" },
        { pregunta: "¿En qué fecha se firmó la independencia del Perú?", opciones: ["9 de julio de 1821", "28 de julio de 1821", "24 de junio de 1824"], respuesta: "28 de julio de 1821" },
        { pregunta: "¿Qué presidente del Perú abolió la esclavitud en 1854?", opciones: ["Ramón Castilla", "Nicolás de Piérola", "José de la Riva-Agüero"], respuesta: "Ramón Castilla" },
        { pregunta: "¿Quién fue el principal líder del movimiento independentista en el sur del Perú?", opciones: ["Juan Pablo Vizcardo y Guzmán", "Túpac Amaru II", "Mariano Melgar"], respuesta: "Túpac Amaru II" },
        { pregunta: "¿Qué presidente del Perú instauró el 'Oncenio' (1908-1919)?", opciones: ["Guillermo Billinghurst", "Augusto B. Leguía", "José Pardo"], respuesta: "Augusto B. Leguía" },
        { pregunta: "¿En qué año se firmó el tratado de Guayaquil, que estableció límites entre el Perú y Ecuador?", opciones: ["1829", "1830", "1860"], respuesta: "1829" },
        { pregunta: "¿Qué líder peruano luchó contra los conquistadores españoles en el siglo XVI?", opciones: ["Huáscar", "Atahualpa", "Túpac Amaru I"], respuesta: "Atahualpa" },
        { pregunta: "¿Cuál fue la causa principal de la guerra del Pacífico?", opciones: ["La disputa por el territorio de Puno", "La invasión de Chile a Bolivia", "La disputa por el control del salitre en el desierto de Atacama"], respuesta: "La disputa por el control del salitre en el desierto de Atacama" },
        { pregunta: "¿Qué líder peruano murió en la batalla de Arica, durante la guerra del Pacífico?", opciones: ["Francisco Bolognesi", "Andrés Avelino Cáceres", "José de la Riva-Agüero"], respuesta: "Francisco Bolognesi" },
        { pregunta: "¿Qué civilista peruano fue conocido por su oposición a la dictadura de José Manuel Pando?", opciones: ["Nicolás de Piérola", "Ramón Castilla", "Guillermo Billinghurst"], respuesta: "Guillermo Billinghurst" },
        { pregunta: "¿Quién fue José de San Martín?", opciones: ["Libertador", "Presidente", "Rey"], respuesta: "Libertador" }
    ],
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
