<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Scale & Axes
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLinear (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex1domain}}) & range({{ex1range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{i*200}} => Output {{scaleLinear(i*200)}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLinear.Invert (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex1domain}}) & range({{ex1range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{scaleLinear(i*200)}} => Output {{scaleLinear.invert(scaleLinear(i*200))}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow pa-3">
      <v-card-title class="title">
        Simple Bar Chart
      </v-card-title>
      <v-layout row
                wrap>
        <v-flex xs9>
          <v-slider :max="400"
                    v-model="exBarHeight"
                    type="number"
                    label="Height"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exBarHeight"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs9>
          <v-slider :max="320"
                    v-model="exBarWidth"
                    type="number"
                    label="Width"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exBarWidth"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs12
                sm6>
          Without ScaleLinear <br>
          <div id="ex-bar1-area"></div>
        </v-flex>
        <v-flex xs12
                sm6>
          With ScaleLinear <br>
          <div id="ex-bar2-area"></div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import data from '@/data/buildings.json'
import * as d3 from 'd3'

export default {
  data() {
    return {
      color: colors.indigo.base,
      data: data,
      scaleLinear: null,
      ex1domain: [0, 1000],
      ex1range: [0, 500],
      exBarHeight: 200,
      exBarWidth: 200
    }
  },
  created() {
    this.scaleLinear = d3.scaleLinear()
      .domain(this.ex1domain)
      .range(this.ex1range)
  },
  mounted() {
    this.exBar1()
    this.exBar2()
  },
  watch: {
    exBarWidth() {
      const svg1 = d3.select('#ex-bar1-container')
      svg1.attr('width', this.exBarWidth)
      const svg = d3.select('#ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.attr('width', this.exBarWidth)
      svg.selectAll('rect')
        .attr('width', x(40))
        .attr('x', (d, i) => x(i * 60 + 20))
    },
    exBarHeight() {
      const svg1 = d3.select('#ex-bar1-container')
      svg1.attr('height', this.exBarHeight)
      const svg = d3.select('#ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLinear()
        .domain([0, 450])
        .range([0, box.height])
      svg.attr('height', this.exBarHeight)
      svg.selectAll('rect')
        .attr('height', (d, i) => y(d.height))
    }
  },
  methods: {
    exBar1() {
      const svg = d3.select('#ex-bar1-area')
        .append('svg')
        .attr('width', this.exBarWidth)
        .attr('height', this.exBarHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-bar1-container')
      svg.selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 60 + 20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', d => d.height)
        .attr('id', (d, i) => `ex-bar1-${i}`)
        .attr('fill', 'black')
    },
    exBar2() {
      const svg = d3.select('#ex-bar2-area')
        .append('svg')
        .attr('width', this.exBarWidth)
        .attr('height', this.exBarHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLinear()
        .domain([0, 400])
        .range([0, box.height])
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => x(i * 60 + 20))
        .attr('y', 20)
        .attr('width', x(40))
        .attr('height', d => y(d.height))
        .attr('id', (d, i) => `ex-bar2-${i}`)
        .attr('fill', 'black')
    }
  }
}
</script>

<style lang="sass">
</style>
