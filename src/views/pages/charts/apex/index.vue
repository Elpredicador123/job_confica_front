<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import {
  linewithDataChart,
  dashedLineChart,
  splineAreaChart,
  columnChart,
  columnDatalabelChart,
  barChart,
  mixedChart,
  radialChart,
  pieChart,
  donutChart
} from "./data";

/**
 * Apex-chart component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      linewithDataChart: linewithDataChart,
      dashedLineChart: dashedLineChart,
      splineAreaChart: splineAreaChart,
      columnChart: columnChart,
      columnDatalabelChart: columnDatalabelChart,
      barChart: barChart,
      mixedChart: mixedChart,
      radialChart: radialChart,
      pieChart: pieChart,
      donutChart: donutChart,
      title: "Apex",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Apex",
          active: true
        }
      ]
    };
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line With Data Labels</BCardTitle>
            <!-- Line with Data Labels chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="line"
              dir="ltr"
              :series="linewithDataChart.series"
              :options="linewithDataChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Dashed Line</BCardTitle>
            <!-- Dashed Line Chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="line"
              dir="ltr"
              :series="dashedLineChart.series"
              :options="dashedLineChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Spline Area</BCardTitle>
            <!-- Spline Area chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="area"
              dir="ltr"
              :series="splineAreaChart.series"
              :options="splineAreaChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Column Charts</BCardTitle>
            <!-- Column Charts -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="columnChart.series"
              :options="columnChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <div class="row">
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Column With Data Labels</BCardTitle>
            <!-- Column with Data Labels -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="columnDatalabelChart.series"
              :options="columnDatalabelChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bar Chart</BCardTitle>
            <!-- Bar Chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="barChart.series"
              :options="barChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </div>
    <!-- end row -->

    <div class="row">
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line, Column & Area Chart</BCardTitle>
            <!-- Line, Column & Area Chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="line"
              dir="ltr"
              :series="mixedChart.series"
              :options="mixedChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Radial Chart</BCardTitle>
            <!-- Radial Chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="radialBar"
              dir="ltr"
              :series="radialChart.series"
              :options="radialChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </div>
    <!-- end row -->

    <div class="row">
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>
            <!-- Pie Chart -->
            <apexchart
              class="apex-charts"
              height="320"
              type="pie"
              dir="ltr"
              :series="pieChart.series"
              :options="pieChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Donut Chart</BCardTitle>
            <!-- Donut Chart -->
            <apexchart
              class="apex-charts"
              height="320"
              type="donut"
              dir="ltr"
              :series="donutChart.series"
              :options="donutChart.chartOptions"
            ></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </div>
    <!-- end row -->
  </Layout>
</template>
