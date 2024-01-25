<template>
  <div class="chart-container">
    <div ref="pieChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "CandleStickChart",
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
          data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
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
        yAxis: {
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
        series: [
          {
            type: "k",
            data: [
              [20, 30, 10, 35],
              [40, 35, 30, 55],
              [33, 38, 33, 40],
              [40, 40, 32, 42]
            ],
            itemStyle: {
              normal: {
                color: "#556ee6",
                color0: "#34c38f",
                borderColor: "#556ee6",
                borderColor0: "#34c38f"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    const ref = this.$refs.pieChart;
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
