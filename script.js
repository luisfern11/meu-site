document.getElementById('start-button').addEventListener('click', function() {
    let tempo = 60;
    const contadorDisplay = document.getElementById('contador');
    const coordenadasDiv = document.getElementById('coordenadas');

    const intervalo = setInterval(() => {
        tempo--;
        contadorDisplay.textContent = tempo;

        if (tempo <= 0) {
            clearInterval(intervalo);
            mostrarCoordenadas();
        }
    }, 1000);
});

function mostrarCoordenadas() {
    const lat = (Math.random() * 180 - 90).toFixed(6);
    const lng = (Math.random() * 360 - 180).toFixed(6);
    const coordenadasDiv = document.getElementById('coordenadas');

    coordenadasDiv.textContent = `Coordenadas: ${lat}, ${lng}`;
    coordenadasDiv.classList.remove('hidden');
}
