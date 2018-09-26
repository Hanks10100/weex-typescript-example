<template>
  <div class="center">
    <text class="text">{{title}}</text>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { whatever } from './utils/helper'
  export default Vue.extend({
    data () {
      return {
        title: 'Typescript'
      }
    },
    methods: {
      output (message: string) {
        return whatever(message)
      }
    },
    mounted () {
      this.title = this.output('mounted')
    }
  })
</script>

<style lang="scss" scoped>
  @import "./styles/common.scss";
</style>
