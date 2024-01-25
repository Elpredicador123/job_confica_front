<template>
  <div class="chart-container">
    <div class="chart" id="biPolar-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { lineAreaChart } from "../utils";

export default {
  mounted() {
    const { data, options } = lineAreaChart;
    new Chartist.LineChart("#biPolar-chart", { ...data }, { ...options });
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
