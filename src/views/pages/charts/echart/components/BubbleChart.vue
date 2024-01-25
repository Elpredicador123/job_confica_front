<template>
  <div class="chart-container">
    <div ref="bubbleChart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { bubbleChart } from "../utils.js";

export default {
  name: "BubbleChart",
  data() {
    return {
      options: bubbleChart
    };
  },
  mounted() {
    const ref = this.$refs.bubbleChart;
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
