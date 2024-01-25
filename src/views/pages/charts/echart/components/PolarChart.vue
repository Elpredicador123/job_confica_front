<template>
  <div class="chart-container">
    <div ref="polarChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { polarChart } from "../utils.js";

export default {
  name: "PolarChart",
  data() {
    return {
      options: polarChart
    };
  },
  mounted() {
    const ref = this.$refs.polarChart;
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
