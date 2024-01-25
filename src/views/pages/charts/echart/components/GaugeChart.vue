<template>
  <div class="chart-container">
    <div ref="pieChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "GaugeChart",
  data() {
    return {
      options: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: { title: "Refresh" },
            saveAsImage: { title: "Download Image" }
          }
        },
        series: [
          {
            name: "Business indicator",
            type: "gauge",
            detail: { formatter: "{value}%" },
            axisLine: {
              lineStyle: {
                color: [
                  [0.2, "#34c38f"],
                  [0.8, "#556ee6"],
                  [1, "#f46a6a"]
                ],
                width: 20
              }
            },
            data: [{ value: 50, name: "Completion rate" }]
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
