<template>
  <div class="chart-container">
    <div class="chart" id="line-interpolation-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { lineSmoothingChart } from "../utils";

export default {
  mounted() {
    const { data, options } = lineSmoothingChart;
    new Chartist.LineChart(
      "#line-interpolation-chart",
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
