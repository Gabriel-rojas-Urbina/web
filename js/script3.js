let tiempoRestante = 60; // 60 segundos
setInterval(function() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        document.getElementById("temporizador").textContent = "Tiempo restante: " + tiempoRestante + "s";
    } else {
        alert("¡Se acabó el tiempo!");
        mostrarResultados();
    }
}, 1000);
