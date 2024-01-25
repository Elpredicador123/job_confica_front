<template>
  <div class="chart-container">
    <div class="chart" id="donut-animation-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { donutAnimateChart } from "../utils";

export default {
  mounted() {
    const { data, options } = donutAnimateChart;
    new Chartist.PieChart(
      "#donut-animation-chart",
      { ...data },
      { ...options }
    );
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: auto;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
