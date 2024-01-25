<template>
  <div class="chart-container">
    <div ref="donutChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "DonutChart",
  data() {
    return {
      options: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
          textStyle: {
            color: "#999"
          }
        },
        color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
        series: [
          {
            name: "Total sales",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "Laptop" },
              { value: 310, name: "Tablet" },
              { value: 234, name: "Mobile" },
              { value: 135, name: "Others" },
              { value: 1548, name: "Desktop" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    const ref = this.$refs.donutChart;
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
