import React from 'react'
import ReactApexCharts from 'react-apexcharts';
class MyChart extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Comments Without Processing',
                data: [40, 60, 80, 90, 110, 120, 130]
            }, {
                name: 'Comments After Processing',
                data: [10, 12, 16, 33, 44, 51, 55]
            }],

            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        }

    }

    render() {
        return (
            <ReactApexCharts
                options={this.state.options}
                series={this.state.series}
                width="95%"
                type="line"
                height="250"

            />
        )
    }


}
export default MyChart;