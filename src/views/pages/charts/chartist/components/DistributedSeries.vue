<template>
  <div class="chart-container">
    <div class="chart" id="distributed-bar-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { distributedSeries } from "../utils";

export default {
  mounted() {
    const { data, options } = distributedSeries;
    new Chartist.BarChart(
      "#distributed-bar-chart",
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
