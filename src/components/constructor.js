function constructor_chart(data_series,data_categories){
    let columnChartAux = {
        series: data_series,
        chartOptions: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "45%",
                    endingShape: "rounded",
                    dataLabels: {
                    position: 'top' // Establece la posición de las etiquetas de datos encima de las barras
                    }
                }
            },
            dataLabels: {
            enabled: true,
            offsetY: -20, // Ajusta la posición vertical de las etiquetas de datos
            style: {
                fontSize: '12px',
                colors: ['#000']
            }
            },
            stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
            },
            colors: ['#10b07a', '#dc3545', '#f1b44c'],
            xaxis: {
            categories: data_categories
            },
            yaxis: {
            title: {
                text: ""
            }
            },
            grid: {
            borderColor: "#f1f1f1"
            },
            fill: {
            opacity: 1
            },
        }
    }
    return columnChartAux;
}
function constructor_piechart(data_series,data_categories){
    let pie_chart = {
        series: data_series,
        chartOptions: {
            labels: data_categories,
            colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
            legend: {
                show: true,
                position: "bottom",
                horizontalAlign: "center",
                verticalAlign: "middle",
                floating: false,
                fontSize: "14px",
                offsetX: 0,
                offsetY: 10
            },
            responsive: [
                {
                    breakpoint: 600,
                    options: {
                    chart: {
                        height: 240
                    },
                    legend: {
                        show: false
                    }
                    }
                }
            ]
        }
    }
    return pie_chart;
}

function constructor_barchart(data_series,data_categories){
    let bar_chart = {
        series: [
            {
              data: data_series,
            }
        ],
        chartOptions: {
            chart: {
                toolbar: {
                show: false
                }
            },
            plotOptions: {
                bar: {
                horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#34c38f","#f46a6a","#50a5f1","#556ee6", "#f1b44c"],
            grid: {
                borderColor: "#f1f1f1"
            },
            xaxis: {
                categories: data_categories
            }
        }
    }
    return bar_chart;
}



export {
    constructor_chart,constructor_piechart,constructor_barchart
}