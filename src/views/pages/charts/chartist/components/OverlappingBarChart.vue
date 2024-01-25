<template>
  <div class="chart-container">
    <div class="chart" id="overlapping-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { overlappingBarChart } from "../utils";

export default {
  mounted() {
    const { data, options } = overlappingBarChart;
    new Chartist.BarChart("#overlapping-chart", { ...data }, { ...options });
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
