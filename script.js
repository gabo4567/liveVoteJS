let jugadores = [
  "Messi", "Mbappé", "Haaland", "De Bruyne", "Vinícius",
  "Kane", "Salah", "Bellingham", "Rodri", "Lewandowski"
];

function votar(jugador) {
  let votos = JSON.parse(localStorage.getItem('votos')) || {};
  votos[jugador] = (votos[jugador] || 0) + 1;
  localStorage.setItem('votos', JSON.stringify(votos));
  actualizarGrafico();
  actualizarRanking();
}

function reiniciarVotos() {
  localStorage.removeItem('votos');
  if (chart) {
    chart.destroy();
    chart = null;
  }
  document.querySelector("#ranking tbody").innerHTML = "";
  actualizarGrafico();
  actualizarRanking();
}

let chart;

function actualizarGrafico() {
  let votos = JSON.parse(localStorage.getItem('votos')) || {};
  let data = jugadores.map(j => votos[j] || 0);

  if (chart) {
    chart.data.datasets[0].data = data;
    chart.update();
  } else {
    const ctx = document.getElementById('grafico').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: jugadores,
        datasets: [{
          label: 'Votos',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          duration: 1000
        },
        scales: {
          y: {
            beginAtZero: true,
            precision: 0
          }
        }
      }
    });
  }
}

function actualizarRanking() {
  let votos = JSON.parse(localStorage.getItem('votos')) || {};
  let ranking = jugadores.map(j => [j, votos[j] || 0]);
  ranking.sort((a, b) => b[1] - a[1]);

  let tbody = document.querySelector("#ranking tbody");
  tbody.innerHTML = "";
  ranking.forEach(([jugador, cantidad]) => {
    let row = `<tr><td>${jugador}</td><td>${cantidad}</td></tr>`;
    tbody.innerHTML += row;
  });
}

actualizarGrafico();
actualizarRanking();
