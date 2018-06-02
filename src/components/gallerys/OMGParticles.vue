<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          title>
    OMG Particles <br>
    <a href="https://bl.ocks.org/mbostock/1062544">Reference</a>
    <div id="area-1"></div>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
import colors from 'vuetify/es5/util/colors'

export default {
  data() {
    return {
      color: colors.indigo.base,
      svg1: null
    }
  },
  mounted() {
    this.initSvg()
  },
  methods: {
    initSvg() {
      const particle = this.particle
      this.svg1 = d3.select('#area-1')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '400')
        .attr('id', 'svg-1')
        .on('ontouchstart' in document ? 'touchmove' : 'mousemove', function () { particle(this) })
    },
    particle(target) {
      const m = d3.mouse(target) // Get mouse position [x, y]
      this.svg1
        .insert('circle')
        .attr('cx', m[0])
        .attr('cy', m[1])
        .attr('r', 1e-6) // 0.000001
        .style('stroke', (d, i) => d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style('stroke', 'red')
        .style('stroke-opacity', 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr('r', 100)
        .style('stroke-opacity', 1e-6)
        .remove()
      d3.event.preventDefault()
    }
  }
}
</script>

<style lang="sass">
rect
  pointer-events: all

circle
  fill: none
  stroke-width: 2.5px
</style>
