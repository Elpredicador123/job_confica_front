<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import DonutChart from "./components/DonutChart.vue";
import PolarChart from "./components/PolarChart.vue";
import RadarChart from "./components/RadarChart.vue";

/**
 * Chartjs-chart component
 */
export default {
  data() {
    return {
      title: "ChartJs",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "ChartJs",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    PageHeader,
    LineChart,
    BarChart,
    PieChart,
    DonutChart,
    PolarChart,
    RadarChart
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
  <div>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line Chart</BCardTitle>
            <LineChart />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bar Chart</BCardTitle>
            <BarChart />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>
            <div class="d-flex justify-content-center">
              <PieChart />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Donut Chart</BCardTitle>
            <div class="d-flex justify-content-center">
              <DonutChart />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Polar area Chart</BCardTitle>
            <div class="d-flex justify-content-center">
              <PolarChart />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Radar Chart</BCardTitle>
            <div class="d-flex justify-content-center">
              <RadarChart />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
  </Layout>
</template>

<style lang="scss">
.chart-wrapper {
  height: 300px !important;
  width: 100% !important;
}
</style>
