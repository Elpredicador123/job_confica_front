<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            barPercentage: 0.4,
            label: "Sales Analytics",
            backgroundColor: "rgba(52, 195, 143, 0.8)",
            borderColor: "rgba(52, 195, 143, 0.8)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
            hoverBorderColor: "rgba(52, 195, 143, 0.9)",
            data: [65, 59, 81, 45, 56, 80, 50, 20]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    };
  }
};
</script>
<template>
  <Bar :data="data" :options="options" class="chart-wrapper" />
</template>
