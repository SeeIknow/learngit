<template lang="html">
  <div class="appMain">
  <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  data (){
    return {}
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style lang="scss">
@import './appMain.scss'
</style>
