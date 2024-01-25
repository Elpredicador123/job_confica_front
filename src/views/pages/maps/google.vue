<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { GoogleMap, Marker as Markers, Polygon } from "vue3-google-map";

/**
 * Google-map component
 */
export default {
  components: {
    Layout,
    PageHeader,
    GoogleMap,
    Markers,
    Polygon
  },
  data() {
    return {
      title: "Google Maps",
      items: [
        {
          text: "Maps",
          href: "/"
        },
        {
          text: "Google Maps",
          active: true
        }
      ],
      markerOptions: {
        position: { lat: 11, lng: 12 },
        title: "lima"
      },
      polygonOptions: {
        paths: [
          { lat: 1.38, lng: 103.8 },
          { lat: 1.38, lng: 103.81 },
          { lat: 1.39, lng: 103.81 },
          { lat: 1.39, lng: 103.8 }
        ],
        strokeColor: "#000",
        strokeOpacity: 0.8,
        strokeWeight: 4,
        fillColor: "#000",
        fillOpacity: 0.35
      }
    };
  },
  methods: {
    markerClick() {
      alert("You clicked in this marker");
    }
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
            <BCardTitle>Basic</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- basic map -->
            <GoogleMap
              api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
              style="width: 100%; height: 300px"
              :center="{ lat: 2, lng: 2 }"
              :zoom="5"
            >
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Markers</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <GoogleMap
              api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
              style="width: 100%; height: 300px"
              :center="{ lat: 11, lng: 12 }"
              :zoom="3"
            >
              <Markers :options="markerOptions" @click="markerClick" />
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Street View Panoramas</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Street view map -->
            <GoogleMap
              api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
              style="width: 100%; height: 300px"
              :center="{
                lat: 52.201272,
                lng: 0.11872
              }"
              :zoom="13"
            >
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Polygon Editing</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Polygon editiong map -->
            <GoogleMap
              api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
              style="width: 100%; height: 300px"
              :center="{ lat: 1.38, lng: 103.8 }"
              :zoom="12"
            >
              <Polygon :options="polygonOptions" />
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Map type</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Set map type -->
            <GoogleMap
              api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
              style="width: 100%; height: 300px"
              mapTypeId="terrain"
              :center="center"
              :zoom="3"
            >
              <Rectangle :options="rectangle" />
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
