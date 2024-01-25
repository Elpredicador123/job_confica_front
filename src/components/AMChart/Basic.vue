<template>
  <div class="amchart-map" ref="basicMapDiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
export default {
  name: "BasicMap",
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
      let root = am5.Root.new(this.$refs.basicMapDiv);
      root.setThemes([am5themes_Animated.new(root)]);

      let cities = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "New York City"
            },
            geometry: {
              type: "Point",
              coordinates: [-73.778137, 40.641312]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "London"
            },
            geometry: {
              type: "Point",
              coordinates: [-0.454296, 51.47002]
            }
          },
          {
            type: "Feature",
            properties: {
              name: "Beijing"
            },
            geometry: {
              type: "Point",
              coordinates: [116.597504, 40.072498]
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

      const series = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"]
        })
      );

      series.mapPolygons.template.setAll({
        fill: "#d6dae6",
        tooltipText: "{name}",
        interactive: true,
        templateField: "columnSettings",
        opacity: 1,
        color: "#000"
      });
      series.mapPolygons.template.states.create("hover", {
        fill: am5.color("#d6dae6")
      });

      let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
          geoJSON: cities
        })
      );

      pointSeries.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0x374151),
            tooltipText: "{name}",
            opacity: 1
          })
        });
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
