<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  RadialLinearScale
} from "chart.js";
import { PolarArea } from "vue-chartjs";

ChartJS.register(CategoryScale, Title, Tooltip, Legend, RadialLinearScale);

export default {
  name: "App",
  components: {
    PolarArea
  },
  data() {
    return {
      data: {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            data: [11, 16, 7, 18],
            backgroundColor: ["#50a5f1", "#34c38f", "#f1b44c", "#5b73e8"],
            label: "My dataset", // for legend
            hoverBorderColor: "#fff"
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
  <PolarArea :data="data" :options="options" class="polar-chart-wrapper" />
</template>

<style lang="scss">
.polar-chart-wrapper {
  height: 300px !important;
}
</style>
