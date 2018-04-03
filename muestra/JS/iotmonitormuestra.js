window.onload = init;
function init(){
// Our labels along the x-axis
var years = [0,10,20,30,40,50,60,70,80,90];
// For drawing the lines
var temperatura = [21,20,18,22,21,20,18,22,23,24];
var humedad = [35,35,41,50,55,48,47,40,37,38];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: temperatura,
        label: "Temperatura",
        borderColor: "red",
        fill: false
      },
      { 
        data: humedad,
        label: "Humedad",
        borderColor: "blue",
        fill: false
      },
    ]
  }
});

document.getElementById('demo_boton').onclick = function(){
	myChart.data.labels.push('100');
	myChart.data.datasets[0].data.push(Math.random()*30 + 0);
	myChart.data.datasets[1].data.push(Math.random()*99 + 0);

	myChart.data.labels.shift();
    myChart.data.datasets[0].data.shift();
    myChart.data.datasets[1].data.shift();
    
	myChart.update();
	}
}