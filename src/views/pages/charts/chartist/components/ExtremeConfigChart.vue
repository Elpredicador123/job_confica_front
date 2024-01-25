<template>
  <div class="chart-container">
    <div class="chart" id="extreme-config-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { extremeConfiguration } from "../utils";

export default {
  mounted() {
    const { data, options } = extremeConfiguration;
    new Chartist.BarChart("#extreme-config-chart", { ...data }, { ...options });
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
