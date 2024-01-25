<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import "chartist/dist/index.scss";
// import SmilAnimation from "./components/SmillAnimation.vue";
import SmilAnimation from "./components/SmillAnimation";
import LineChart from "./components/LineChart";
import LineChartWithArea from "./components/LineChartWithArea";
import BiPolarChart from "./components/BiPolarChart";
import LineInterpolation from "./components/LineInterpolation";
import OverlappingBarChart from "./components/OverlappingBarChart";
import StackBarChart from "./components/StackBarChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import DistributedSeries from "./components/DistributedSeries";
import LabelPlacementChart from "./components/LabelPlacementChart";
import ExtremeConfigChart from "./components/ExtremeConfigChart";
import PolarBarChart from "./components/PolarBarChart";
import DonutAnimationChart from "./components/DonutAnimationChart";
import SimplePieChart from "./components/SimplePieChart";
import CommonLayout from "./components/CommonLayout";


/**
 * Chartist-chart component
 */
export default {
  data() {
    return {
      title: "Chartist",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Chartist",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    PageHeader,
    SmilAnimation,
    LineChart,
    LineChartWithArea,
    BiPolarChart,
    LineInterpolation,
    OverlappingBarChart,
    StackBarChart,
    HorizontalBarChart,
    DistributedSeries,
    LabelPlacementChart,
    ExtremeConfigChart,
    PolarBarChart,
    DonutAnimationChart,
    SimplePieChart,
    CommonLayout
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div>
      <BRow>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Advanced Smil Animations</template>
            <SmilAnimation class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Simple Line Chart</template>
            <LineChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Line Chart With Area</template>
            <LineChartWithArea class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Bi-polar Line Chart Wth Area Only</template>
            <BiPolarChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Line Interpolation / Smoothing</template>
            <LineInterpolation class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Overlapping Bars On Mobile</template>
            <OverlappingBarChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Stacked Bar Chart</template>
            <StackBarChart class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Horizontal Bar Chart</template>
            <HorizontalBarChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Distributed Series</template>
            <DistributedSeries class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Label Placement</template>
            <LabelPlacementChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Extreme Responsive Configuration</template>
            <ExtremeConfigChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Bi-polar Bar Chart</template>
            <PolarBarChart class="ct-chart" />
          </CommonLayout>
        </BCol>
        <BCol lg="6">
          <CommonLayout>
            <template #name>Donut With Svg.animate</template>
            <DonutAnimationChart class="ct-chart" />
          </CommonLayout>
        </BCol>

        <BCol lg="6">
          <CommonLayout>
            <template #name>Simple Pie Chart</template>
            <SimplePieChart class="ct-chart" />
          </CommonLayout>
        </BCol>
      </BRow>
    </div>
  </Layout>
</template>
