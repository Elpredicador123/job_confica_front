<template>
  <div class="chart-container">
    <div class="chart" id="horizontal-bar-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { horizontalBarChart } from "../utils";

export default {
  mounted() {
    const { data, options } = horizontalBarChart;
    new Chartist.BarChart("#horizontal-bar-chart", { ...data }, { ...options });
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
