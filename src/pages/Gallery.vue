<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Gallery
    <v-card class="red lighten-5">
      <router-view/>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass">
</style>
