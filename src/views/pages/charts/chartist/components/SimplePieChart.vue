<template>
  <div class="chart-container">
    <div class="chart" id="pie-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { simplePieChart } from "../utils";

export default {
  mounted() {
    const { data, options } = simplePieChart;
    new Chartist.PieChart("#pie-chart", { ...data }, { ...options });
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
