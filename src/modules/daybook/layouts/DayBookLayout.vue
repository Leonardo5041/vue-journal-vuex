<template>
  <Navbar></Navbar>
  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import {defineAsyncComponent} from "vue";

export default {
  name: "DayBookLayout",
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList'))
  }
}
</script>

<style scoped>

</style>