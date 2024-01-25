<template>
  <div class="chart-container">
    <div class="chart" id="stack-bar-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { stackBarChart } from "../utils";

export default {
  mounted() {
    const { data, options } = stackBarChart;
    new Chartist.BarChart("#stack-bar-chart", { ...data }, { ...options });
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
