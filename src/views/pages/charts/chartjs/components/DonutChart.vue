<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement
} from "chart.js";
import { Doughnut } from "vue-chartjs";

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
    Doughnut
  },
  data() {
    return {
      data: {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ["#5b73e8", "#ebeff2"],
            hoverBackgroundColor: ["#5b73e8", "#ebeff2"],
            hoverBorderColor: "#fff",
            borderWidth: 0,
            radius: "90%",
            innerRadius: "75%"
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
  <Doughnut :data="data" :options="options" class="donut-chart-wrapper" />
</template>

<style lang="scss">
.donut-chart-wrapper {
  height: 265px !important;
}
</style>
