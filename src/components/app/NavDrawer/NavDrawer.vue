<template>
<v-navigation-drawer app
                     persistent
                     left
                     dark
                     fixed
                     v-model="drawer"
                     :clipped="$vuetify.breakpoint.smAndUp"
                     :mini-variant="Mini"
                     :width="$vuetify.breakpoint.xsOnly ? 250 : 300"
                     mobile-break-point="1000">
  <v-divider></v-divider>
  <v-list dense>
    <v-list-tile router
                 :to="r.path"
                 :key="i"
                 v-for="(r, i) in routeData"
                 exact>
      <v-list-tile-action>
        <ImageFallbackIcon :size="20"
                           :route="r"
                           :active="r.name === route.name" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{r.name | capitalize}}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { routeData } from '@/router'
import { ImageFallbackIcon } from '@/components/customIcon'

export default {
  name: 'NavDrawer',
  components: { ImageFallbackIcon },
  props: {},
  data() {
    return {
      drawer: true,
      mini: false,
      routeData
    }
  },
  created() {},
  mounted() {},
  beforeDestory() {},
  watch: {
    NavDrawer(val) { this.drawer = val },
    drawer(val) { this.mutNavDrawer(val) }
  },
  computed: {
    ...mapState(['route']),
    ...mapState('app', ['NavDrawer', 'Mini'])
  },
  methods: {
    ...mapMutations('app', ['mutNavDrawer', 'mutToggleMini'])
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>
