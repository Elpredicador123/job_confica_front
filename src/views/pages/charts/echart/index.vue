<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import LineChart from "./components/LineChart.vue";
import MixBarChart from "./components/MixBarChart.vue";
import PieChart from "./components/PieChart.vue";
import DonutChart from "./components/DonutChart.vue";
import CandleStickChart from "./components/CandleStickChart.vue";
import GaugeChart from "./components/GaugeChart.vue";
import BubbleChart from "./components/BubbleChart.vue";
import PolarChart from "./components/PolarChart.vue";

export default {
  data() {
    return {
      title: "ECharts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "ECharts",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    PageHeader,
    LineChart,
    MixBarChart,
    PieChart,
    DonutChart,
    CandleStickChart,
    GaugeChart,
    BubbleChart,
    PolarChart
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
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Line Chart</BCardTitle>
            <LineChart />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Mix Line-Bar</BCardTitle>
            <MixBarChart />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>
            <PieChart />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Doughnut Chart</BCardTitle>
            <DonutChart />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Candle Stick Chart</BCardTitle>
            <CandleStickChart />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Gauge Chart</BCardTitle>
            <GaugeChart />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Bubble Chart</BCardTitle>
            <BubbleChart />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="card-body">
            <BCardTitle class="mb-4">Polar Chart</BCardTitle>
            <PolarChart />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </div>
  </Layout>
</template>
