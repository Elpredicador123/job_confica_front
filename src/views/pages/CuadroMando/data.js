const columnChart = {
  series: [
    {
      name: "Verde",
      data: [46, 57, 59]
    },
    {
      name: "Amarrillo",
      data: [74, 83, 102]
    },
    {
      name: "Rojo",
      data: [37, 42, 38]
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
    colors: ['#10b07a', '#f1b44c', '#dc3545'],
    xaxis: {
      categories: [
        "LIMA",
        "CUSCO",
        "JULIACA",
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
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    }
  }
};
const columnChart2 = {
  series: [
    {
      name: "Verde",
      data: [46, 57, 59]
    },
    {
      name: "Amarrillo",
      data: [74, 83, 102]
    },
    {
      name: "Rojo",
      data: [37, 42, 38]
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
    colors: ['#10b07a', '#f1b44c', '#dc3545'],
    xaxis: {
      categories: [
        "LIMA",
        "CUSCO",
        "JULIACA",
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
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    }
  }
};
const pieChart = {
  series: [40, 50],
  chartOptions: {
    labels: ["HFC", "GPON"],
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
  series: [44, 55, 41, 17],
  chartOptions: {
    labels: ["HFC", "GPON", "DTH", "ADSL"],
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
