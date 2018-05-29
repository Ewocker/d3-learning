<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    D3 Select
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Example 1 (Select/Attr):
      </v-card-title>
      Click on Rect to change color
      <svg width="300"
           height="100"
           id="example-1-container"
           class="blue-grey lighten-4">
        <rect v-for="i in 3" :id="`example-1-${i}`"
              :x="40 * i"
              y="30"
              width="20"
              height="20"
              @click="select1(i)" />
      </svg>
      <v-btn @click="appendCircle">
        Add Circle
      </v-btn>
    </v-card>
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Example 2 (SelectAll/attr function):
      </v-card-title>
      <svg width="300"
           height="100"
           id="example-2-container"
           class="blue-grey lighten-4">
        <rect v-for="i in 3" :id="`example-1-${i}`"
              :x="40 * i"
              y="30"
              width="20"
              height="20"
              @click="" />
      </svg>
      <v-btn @click="appendCircle">
        Add Circle
      </v-btn>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
import colors from 'vuetify/es5/util/colors'

export default {
  data() {
    return {
      example_1_selected: [],
      color: colors.indigo.base
    }
  },
  methods: {
    select1(i) {
      d3.select(`#example-1-${i}`)
        .attr('fill', this.color)
    },
    appendCircle() {
      d3.select('#example-1-container')
        .append('circle')
        .attr('cx', 170)
        .attr('cy', 40)
        .attr('r', 10)
        .attr('fill', this.color)
    },
    example2() {}
  },
  mounted() {}
}
</script>

<style lang="sass">
</style>
