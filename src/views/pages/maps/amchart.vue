<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Basic from "@/components/AMChart/Basic.vue";
import MapLine from "@/components/AMChart/MapLine.vue";
import Pacific from "@/components/AMChart/Pacific.vue";

/**
 * Google-map component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Basic,
    MapLine,
    Pacific
  },
  data() {
    return {};
  },
  methods: {},
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
            <BCardTitle>Vector With Point</BCardTitle>
            <Basic />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard>
          <BCardTitle class="mb-0">Line With Point</BCardTitle>
          <BCardBody>
            <MapLine />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard>
          <BCardTitle class="mb-0">Pacific Map</BCardTitle>
          <BCardBody>
            <Pacific />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
