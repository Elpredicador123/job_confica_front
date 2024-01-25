<template>
  <div class="chart-container">
    <div class="chart" id="line-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { simpleLineChart } from "../utils";

export default {
  mounted() {
    const { data, options } = simpleLineChart;
    new Chartist.LineChart("#line-chart", { ...data, ...options });
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 350px;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
