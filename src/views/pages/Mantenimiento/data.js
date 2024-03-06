const barChart = {
  series: [
    {
      data: []
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
    colors: ['#34c38f'],
    grid: {
      borderColor: "#f1f1f1"
    },
    xaxis: {
      categories: [
        
      ]
    }
  }
};
const barChart2 = {
  series: [
    {
      data: []
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
    colors: ['#34c38f'],
    grid: {
      borderColor: "#f1f1f1"
    },
    xaxis: {
      categories: [
        
      ]
    }
  }
};
const pieChart = {
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
  barChart,
  barChart2,
  pieChart,
  pieChart2
};
