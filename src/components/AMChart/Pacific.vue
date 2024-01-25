<template>
  <div class="amchart-map" ref="pacificMapDiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
export default {
  name: "PacificMap",
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
      let root = am5.Root.new(this.$refs.pacificMapDiv);
      root.setThemes([am5themes_Animated.new(root)]);

      var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "none",
          panY: "none",
          projection: am5map.geoNaturalEarth1(),
          minZoomLevel: 1,
          maxZoomLevel: 16
        })
      );

      var graticuleSeries = chart.series.insertIndex(
        0,
        am5map.GraticuleSeries.new(root, {})
      );

      graticuleSeries.mapLines.template.setAll({
        stroke: am5.color(0x000000),
        strokeOpacity: 0.2
      });

      const series = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"]
        })
      );

      series.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        templateField: "polygonSettings",
        opacity: 1,
        color: "#000"
      });
      var colors = am5.ColorSet.new(root, {});
      series.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(9)
      });
      this.root = root;
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
