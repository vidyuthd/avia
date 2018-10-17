import MainView from '../main';

export default class View extends MainView {
    mount() {
      super.mount();

      var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue"],
        datasets: [{
            label: '# of Votes',
            data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

      console.log('DashboardIndexView mounted');
    }

    unmount() {
      super.unmount();

      console.log('DashboardIndexView unmounted');
    }
}
