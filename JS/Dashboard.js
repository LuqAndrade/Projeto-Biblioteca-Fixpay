var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart (ctx, {
    type: 'bar',
    data: {
       labels: ['vermelho','azul','amarelo','verde','roxo','laranja'],
       datasets: [{
label: '# of Votes',
data:[12,19,3,5,2,3],

       }]
    }
})