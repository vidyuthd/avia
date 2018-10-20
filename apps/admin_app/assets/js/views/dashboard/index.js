import MainView from '../main';

export default class View extends MainView {
    mount() {
        super.mount();

        var ctxbar = document.getElementById("barChart").getContext('2d');
        var barChart = new Chart(ctxbar, {
            type: 'bar',
            data: {
                labels: barchart.labels,
                datasets: [{
                    label: 'No of Orders',
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

        var ctxline = document.getElementById("lineChart").getContext('2d');
        var lineChart = new Chart(ctxline, {
            type: 'line',
            data: {
                labels: linechart.labels,
                datasets: [{
                    data: linechart.data,
                    label: "Revenue",
                    borderColor: "#3e95cd",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Revenue'
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
