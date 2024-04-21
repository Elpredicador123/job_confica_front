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
function constructor_piechart(data_series,data_categories,colors = null){
    console.log(data_series,data_categories)
    let colors_pie =( colors == null) ?  ["#3477C3", "#8F34C3", "#C3349A", "#C33459", "#C37534","3479C3"] : ["#FF7F50", "#91cc75", "#ee6666", "#fac858", "#4DB6AC","34C3B8"];
    let pie_chart = {
        series: data_series,
        chartOptions: {
            labels: data_categories,
            colors: colors_pie,
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
            ],
            dataLabels: {
                style: {
                    fontSize: '14px' // Ajusta el tamaño de la fuente del porcentaje
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -20 // Ajusta el offset para centrar las etiquetas
                    }
                }
            }
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
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                  },
                distributed: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#34c38f', '#556ee6', '#f46a6a', '#50a5f1', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e','#f48024', '#69d2e7'],
            grid: {
                borderColor: "#f1f1f1"
            },
            yaxis: {
                labels: {
                    show: true
                }
            },
            xaxis: {
                categories: data_categories
            }
        }
    }
    return bar_chart;
}

function constructor_donutchart(data_series,data_categories){
    let donutChart = {
        series: data_series,
        chartOptions: {
          labels: data_categories,
          colors: ["#34c38f", "#5b73e8","#f1b44c", "#50a5f1", "#f46a6a"],
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
      };
    return donutChart;
}



export {
    constructor_chart,constructor_piechart,constructor_barchart,constructor_donutchart
}