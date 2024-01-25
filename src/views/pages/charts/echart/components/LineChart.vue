<template>
  <div class="chart-container">
    <div ref="chart" class="chart"></div>
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
          x: 50,
          x2: 50,
          y: 30,
          y2: 30,
          borderWidth: 0,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "#8791af"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#8791af"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(166, 176, 207, 0.1)"
            }
          }
        },
        legend: {
          data: ["Desktops", "Laptops", "Tablets"],
          textStyle: {
            color: "#999"
          }
        },
        series: [
          {
            name: "Desktops",
            type: "line",
            stack: "yes",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "Laptops",
            type: "line",
            stack: "yes",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "Tablets",
            type: "line",
            stack: "yes",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    };
  },
  mounted() {
    const ref = this.$refs.chart;
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
