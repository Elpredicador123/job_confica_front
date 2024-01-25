<template>
  <div class="chart-container">
    <div class="chart" id="polar-bar-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { polarBarChart } from "../utils";

export default {
  mounted() {
    const { data, options } = polarBarChart;
    new Chartist.BarChart("#polar-bar-chart", { ...data }, { ...options });
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
