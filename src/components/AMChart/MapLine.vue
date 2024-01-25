<template>
  <div class="amchart-map" ref="mapLine"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default {
  name: "MapLine",
  data() {
    return {
      root: null
    };
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.loadMap();
    }
  },
  methods: {
    loadMap() {
      let root = am5.Root.new(this.$refs.mapLine);
      root.setThemes([am5themes_Animated.new(root)]);
      let routes = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [-73.778137, 40.641312],
                [-0.454296, 51.47002],
                [116.597504, 40.072498]
              ]
            }
          }
        ]
      };
      var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          projection: am5map.geoNaturalEarth1(),
          minZoomLevel: 1,
          maxZoomLevel: 16
        })
      );
      var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: "#d6dae6"
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color("#d6dae6")
      });

      let lineSeries = chart.series.push(
        am5map.MapLineSeries.new(root, {
          geoJSON: routes
        })
      );

      lineSeries.mapLines.template.setAll({
        stroke: am5.color(0x878a99),
        strokeWidth: 3,
        strokeOpacity: 1
      });
    }
  },

  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
};
</script>

<style lang="scss">
.amchart-map {
  width: 100%;
  height: 350px;
}
</style>

