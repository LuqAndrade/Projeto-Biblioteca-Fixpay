var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart (ctx, {
    type: 'bar',
    data: {
       labels: ['vermelho','azul','amarelo','verde','roxo','laranja'],
       datasets: [{
label: '# of Votes',
data:[12,19,3,5,2,3],

backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 99, 132, 0.2)',
]

       }]
    }
})