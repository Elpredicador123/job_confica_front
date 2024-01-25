<template>
  <div class="chart-container">
    <div ref="pieChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "PieChart",
  data() {
    return {
      options: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
          textStyle: {
            color: "#999"
          }
        },
        color: ["#f46a6a", "#34c38f", "#50a5f1", "#f1b44c", "#556ee6"],
        series: [
          {
            name: "Total sales",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "Laptop" },
              { value: 310, name: "Tablet" },
              { value: 234, name: "Mobile" },
              { value: 135, name: "Others" },
              { value: 1548, name: "Desktop" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
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
