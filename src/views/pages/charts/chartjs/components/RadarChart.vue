<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale
} from "chart.js";
import { Radar } from "vue-chartjs";

ChartJS.register(CategoryScale, Title, Tooltip, Legend, RadialLinearScale);

export default {
  name: "App",
  components: {
    Radar
  },
  data() {
    return {
      data: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            label: "Desktops",
            backgroundColor: "rgba(241, 180, 76 , 0.2)",
            borderColor: "#f1b44c",
            pointBackgroundColor: "#f1b44c",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#f1b44c",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "Tablets",
            backgroundColor: "rgba(91, 140, 232, 0.2)",
            borderColor: "#5b73e8",
            pointBackgroundColor: "#5b73e8",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#5b73e8",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      options: {
        maintainAspectRatio: true,
        responsive: true
      }
    };
  }
};
</script>
<template>
  <Radar :data="data" :options="options" class="donut-chart-wrapper" />
</template>

<style lang="scss">
.donut-chart-wrapper {
  height: 300px !important;
}
</style>
