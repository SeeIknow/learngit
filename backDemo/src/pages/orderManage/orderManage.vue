<template lang="html">
  <div class="order">
    <second-bar></second-bar>
    <!-- <table-view></table-view> -->
    <router-view/>
  </div>
</template>

<script>
import SecondBar from '../../components/secondBar/secondBar'
import TableView from '../../components/table/table'
export default {
  data () {
    return {}
  },
  components: {
    SecondBar,
    TableView
  }
}
</script>

<style lang="css">
</style>
