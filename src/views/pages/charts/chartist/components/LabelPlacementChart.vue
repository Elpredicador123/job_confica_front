<template>
  <div class="chart-container">
    <div class="chart" id="label-placement-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { labelPlacementChart } from "../utils";

export default {
  mounted() {
    const { data, options } = labelPlacementChart;
    new Chartist.BarChart(
      "#label-placement-chart",
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
