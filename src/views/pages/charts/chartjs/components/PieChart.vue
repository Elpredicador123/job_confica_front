<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement
} from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(
  CategoryScale,

  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default {
  name: "App",
  components: {
    Pie
  },
  data() {
    return {
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ["#34c38f", "#ebeff2"],
            hoverBackgroundColor: ["#34c38f", "#ebeff2"],
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
  <Pie :data="data" :options="options" class="pie-chart-wrapper" />
</template>

<style lang="scss">
.pie-chart-wrapper {
  height: 265px !important;
}
</style>
