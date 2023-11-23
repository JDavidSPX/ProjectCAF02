let myChart;
let time = 0;

function createChart(amplitude, frequency, wavelength) {
    const ctx = document.getElementById('myChart').getContext('2d'); // Obtiene el contexto 2D del lienzo del gráfico

    myChart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico: línea
        data: {
            labels: Array(800).fill().map((_, i) => i), // Configura las etiquetas del eje x
            datasets: [
                {
                    label: 'Onda electromagnética', // Etiqueta de la onda electromagnética
                    data: Array(800).fill().map((_, i) => amplitude * Math.sin((i + time) * frequency / wavelength)), // Configura los datos de la onda electromagnética
                    fill: false, // Desactiva el relleno debajo de la línea
                    borderColor: 'rgb(75, 192, 192)', // Configura el color de la línea
                    tension: 0.1 // Ajusta la tensión de la curva
                },
                {
                    label: 'Línea de polarización', // Etiqueta de la línea con amplitud cero
                    data: Array(800).fill(0), // Configura los datos de la línea con amplitud cero
                    fill: false, // Desactiva el relleno debajo de la línea
                    borderColor: 'red', // Configura el color de la línea
                    pointRadius: 0, // Oculta los puntos de datos
                    borderWidth: 1, // Ajusta el ancho de la línea roja
                    tension: 0.1 // Ajusta la tensión de la curva
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Configura el eje y para comenzar en cero
                },
                x: {
                    display: false // Oculta el eje x
                }
            },
            animation: {
                duration: 0 // Desactiva la animación predeterminada
            }
        }
    });
}

createChart(0, 0, 0); // valores iniciales

document.getElementById('inputForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const amplitude = parseFloat(form.amplitude.value);
    const frequency = parseFloat(form.frequency.value);
    const wavelength = parseFloat(form.wavelength.value);
    updateChart(amplitude, frequency, wavelength);
});

function updateChart(amplitude, frequency, wavelength) {
    myChart.data.datasets[0].data = Array(800).fill().map((_, i) => amplitude * Math.sin((i + time) * frequency / wavelength));
    myChart.update();
}

setInterval(() => {
    time++;
    const amplitude = parseFloat(document.getElementById('amplitude').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const wavelength = parseFloat(document.getElementById('wavelength').value);
    updateChart(amplitude, frequency, wavelength);
}, 100);
