<template>
  <div class="chart-container">
    <div ref="mixBarChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "LineChart",
  data() {
    return {
      options: {
        // Setup grid
        grid: {
          zlevel: 0,
          x: 80,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          orient: "center",
          left: 0,
          top: 20,
          feature: {
            dataView: { readOnly: false, title: "Data View" },
            magicType: {
              type: ["line", "bar"],
              title: { line: "For line chart", bar: "For bar chart" }
            },
            restore: { title: "restore" },
            saveAsImage: { title: "Download Image" }
          }
        },
        color: ["#34c38f", "#556ee6", "#f46a6a"],
        legend: {
          data: ["Evaporation", "Precipitation", "Average temperature"],
          textStyle: { color: "#8791af" }
        },
        xAxis: [
          {
            type: "category",
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              lineStyle: {
                color: "#8791af"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "Water volume",
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: "#8791af"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLine: {
              lineStyle: {
                color: "#8791af"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            },
            axisLabel: {
              formatter: "{value} Ã‚Â°C"
            }
          }
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2]
          },
          {
            name: "Precipitation",
            type: "bar",
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2]
          },
          {
            name: "Average Temperature",
            type: "line",
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4]
          }
        ]
      }
    };
  },
  mounted() {
    const ref = this.$refs.mixBarChart;
    if (ref) {
      this.setUpChart(ref);
    }
  },
  methods: {
    setUpChart(ref) {
      const myChart = echarts.init(ref);
      myChart.setOption(this.options);
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
