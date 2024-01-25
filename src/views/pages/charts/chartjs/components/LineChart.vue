<script>
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default {
  components: {
    Line
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
          "July",
          "August",
          "September",
          "October"
        ],
        datasets: [
          {
            label: "Sales Analytics",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "#5b73e81a",
            borderColor: "#5b73e8",
            borderCapStyle: "butt",
            borderJoinStyle: "miter",
            pointBorderColor: "#5b73e8",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#5b73e8",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
          },
          {
            label: "Monthly Earnings",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(235, 239, 242)",
            borderColor: "#ebeff2",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false
        },
        stacked: false,

        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left"
          }
        }
      }
    };
  }
};
</script>

<template>
  <Line :data="data" :options="options" class="chart-wrapper" />
</template>
