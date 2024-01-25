<template>
  <div class="chart-container">
    <div class="chart" id="line-with-area-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { areaLineChart } from "../utils";

export default {
  mounted() {
    const { data, options } = areaLineChart;
    new Chartist.LineChart(
      "#line-with-area-chart",
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
