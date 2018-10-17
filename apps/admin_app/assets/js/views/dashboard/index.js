import MainView from '../main';

export default class View extends MainView {
    mount() {
        super.mount();

        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: barchart.labels,
                datasets: [{
                    label: '# of Votes',
                    data: barchart.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
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
