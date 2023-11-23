// Este código se ejecuta cuando el contenido de la página está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Declaración de variables para los gráficos y el tiempo
  let myChart1, myChart2;
  let time = 0;

  function createChart1(amplitude, frequency, wavelength) {
    const ctx = document.getElementById("myChart1").getContext("2d");

    myChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array(800)
          .fill()
          .map((_, i) => i),
        datasets: [
          {
            label: "Onda electromagnética 1",
            data: Array(800)
              .fill()
              .map(
                (_, i) =>
                  amplitude * Math.sin(((i + time) * frequency) / wavelength)
              ),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Línea de polarización", // Etiqueta de la línea con amplitud cero
            data: Array(800).fill(0), // Configura los datos de la línea con amplitud cero
            fill: false, // Desactiva el relleno debajo de la línea
            borderColor: "red", // Configura el color de la línea
            pointRadius: 0, // Oculta los puntos de datos
            borderWidth: 1, // Ajusta el ancho de la línea roja
            tension: 0.1, // Ajusta la tensión de la curva
          },
        ],
      },
      options: {
        animation: {
          duration: 0,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            display: false,
          },
        },
      },
    });
  }

  function createChart2(amplitude, frequency, wavelength) {
    const ctx = document.getElementById("myChart2").getContext("2d");

    myChart2 = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array(800)
          .fill()
          .map((_, i) => i),
        datasets: [
          {
            label: "Onda electromagnética 2",
            data: Array(800)
              .fill()
              .map(
                (_, i) =>
                  amplitude * Math.sin(((i + time) * frequency) / wavelength)
              ),
            fill: false,
            borderColor: "rgb(192, 75, 192)",
            tension: 0.1,
          },
          {
            label: "Línea de polarización", // Etiqueta de la línea con amplitud cero
            data: Array(800).fill(0), // Configura los datos de la línea con amplitud cero
            fill: false, // Desactiva el relleno debajo de la línea
            borderColor: "red", // Configura el color de la línea
            pointRadius: 0, // Oculta los puntos de datos
            borderWidth: 1, // Ajusta el ancho de la línea roja
            tension: 0.1, // Ajusta la tensión de la curva
          },
        ],
      },
      options: {
        animation: {
          duration: 0,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            display: false,
          },
        },
      },
    });
  }

  // Crea los gráficos iniciales con valores predeterminados
  createChart1(0, 0, 0);
  createChart2(0, 0, 0);

  // Funciones para actualizar el primer gráfico con los nuevos valores
  function updateChart1(amplitude, frequency, wavelength) {
    myChart1.data.datasets[0].data = Array(800)
      .fill()
      .map(
        (_, i) => amplitude * Math.sin(((i + time) * frequency) / wavelength)
      );
    myChart1.update();
    // Aquí se actualiza el primer gráfico con los nuevos valores de amplitud, frecuencia y longitud de onda
  }

  // Funciones para actualizar el segundo gráfico con los nuevos valores
  function updateChart2(amplitude, frequency, wavelength) {
    myChart2.data.datasets[0].data = Array(800)
      .fill()
      .map(
        (_, i) => amplitude * Math.sin(((i + time) * frequency) / wavelength)
      );
    myChart2.update();
    // Aquí se actualiza el segundo gráfico con los nuevos valores de amplitud, frecuencia y longitud de onda
  }

  // Event listener para el formulario del primer gráfico
  document
    .getElementById("inputForm1")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que la página se recargue al enviar el formulario
      const form = e.target;
      const amplitude = parseFloat(form.amplitude1.value); // Obtiene la amplitud del primer formulario
      const frequency = parseFloat(form.frequency1.value); // Obtiene la frecuencia del primer formulario
      const wavelength = parseFloat(form.wavelength1.value); // Obtiene la longitud de onda del primer formulario
      updateChart1(amplitude, frequency, wavelength); // Llama a la función de actualización del primer gráfico con los valores ingresados
    });

  // Event listener para el formulario del segundo gráfico
  document
    .getElementById("inputForm2")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que la página se recargue al enviar el formulario
      const form = e.target;
      const amplitude = parseFloat(form.amplitude2.value); // Obtiene la amplitud del segundo formulario
      const frequency = parseFloat(form.frequency2.value); // Obtiene la frecuencia del segundo formulario
      const wavelength = parseFloat(form.wavelength2.value); // Obtiene la longitud de onda del segundo formulario
      updateChart2(amplitude, frequency, wavelength); // Llama a la función de actualización del segundo gráfico con los valores ingresados
    });

  // Función para actualizar los gráficos con el tiempo
  setInterval(() => {
    time++; // Incrementa el tiempo en cada ciclo
    const amplitude1 = parseFloat(document.getElementById("amplitude1").value); // Obtiene la amplitud del primer gráfico
    const frequency1 = parseFloat(document.getElementById("frequency1").value); // Obtiene la frecuencia del primer gráfico
    const wavelength1 = parseFloat(
      document.getElementById("wavelength1").value
    ); // Obtiene la longitud de onda del primer gráfico
    updateChart1(amplitude1, frequency1, wavelength1); // Llama a la función de actualización del primer gráfico con los valores actuales

    const amplitude2 = parseFloat(document.getElementById("amplitude2").value); // Obtiene la amplitud del segundo gráfico
    const frequency2 = parseFloat(document.getElementById("frequency2").value); // Obtiene la frecuencia del segundo gráfico
    const wavelength2 = parseFloat(
      document.getElementById("wavelength2").value
    ); // Obtiene la longitud de onda del segundo gráfico
    updateChart2(amplitude2, frequency2, wavelength2); // Llama a la función de actualización del segundo gráfico con los valores actuales
  }, 100); // El intervalo de tiempo entre actualizaciones es de 100 milisegundos
});
