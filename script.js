// Mostrar la pantalla principal y ocultar la introducción
function iniciarSimulador() {
    document.getElementById("introduccion").style.display = "none";
    document.getElementById("contenedor-principal").style.display = "flex";
}

// Cambiar curso y actualizar imagen
function cambiarCurso(curso) {
    const tituloCurso = document.getElementById("titulo-curso");
    const descripcionCurso = document.getElementById("descripcion-curso");
    const imagenTest = document.getElementById("imagen-test");

    switch (curso) {
        case 'matematicas':
            tituloCurso.textContent = "🧮 Test de Matemáticas";
            descripcionCurso.textContent = "Resuelve problemas básicos de matemáticas.";
            imagenTest.src = "matematicas.jpg";
            break;
        case 'quimica':
            tituloCurso.textContent = "⚗️ Test de Química";
            descripcionCurso.textContent = "Responde preguntas sobre conceptos básicos de química.";
            imagenTest.src = "quimica.jpg";
            break;
        case 'biologia':
            tituloCurso.textContent = "🔬 Test de Biología";
            descripcionCurso.textContent = "Explora preguntas sobre biología básica.";
            imagenTest.src = "biologia.jpg";
            break;
        case 'historia':
            tituloCurso.textContent = "📜 Test de Historia del Perú";
            descripcionCurso.textContent = "Responde preguntas sobre la historia del Perú.";
            imagenTest.src = "historia.jpg";
            break;
    }
}
