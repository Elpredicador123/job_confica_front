const columnChart = {
  series: [

  ],
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
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    colors: ['#10b07a', '#dc3545', '#f1b44c'],
    xaxis: {
      categories: [
        
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    grid: {
      borderColor: "#f1f1f1"
    },
    fill: {
      opacity: 1
    },
  }
};
const columnChart2 = {
  series: [
    
  ],
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
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    colors: ['#10b07a', '#dc3545', '#f1b44c'],
    xaxis: {
      categories: [
        
      ]
    },
    yaxis: {
      title: {
        text: "$"
      }
    },
    grid: {
      borderColor: "#f1f1f1"
    },
    fill: {
      opacity: 1
    }
  }
};
const pieChart = {
  series: [],
  chartOptions: {
    labels: [],
    colors: ["#34c38f", "#556ee6"],
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

const pieChart2 = {
  series: [],
  chartOptions: {
    labels: [],
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
};

export {
  columnChart,
  columnChart2,
  pieChart,
  pieChart2,
};
