<template>
  <div class="chart-container">
    <div class="chart" id="smill-chart"></div>
  </div>
</template>

<script>
import * as Chartist from "chartist";
import { smilAnimationChart } from "../utils";

export default {
  name: "SmillChart",
  mounted() {
    const { data, options } = smilAnimationChart;
    new Chartist.LineChart("#smill-chart", { ...data }, { ...options });
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
