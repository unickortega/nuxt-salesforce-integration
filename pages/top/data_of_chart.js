export const geechsChartData = {
  type: 'line',
  data: {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    datasets: [
      { // one line graph
        label: 'Hours',
        data: [10, 18, 11, 12, 17, 15, 12, 14,10, 18, 11, 12, 17, 15, 12, 14],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1,
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 1,
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    },
    legend: {
      display: true,
      labels: {
          // fontColor: 'rgb(255, 99, 132)'
      },
      position: 'bottom'
  }
  }
}

export default geechsChartData;
