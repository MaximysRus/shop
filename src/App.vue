<template>
  <div class="wrapper">
    <SiteBar></SiteBar>
    <ItemCatalog></ItemCatalog>
  </div>
</template>

<script>
import ItemCatalog from './components/ItemCatalog.vue'
import SiteBar from './components/SideBar.vue'
export default {
  name: 'app',
  components: {
    SiteBar,
    ItemCatalog,
  }
}
</script>

<style lang="scss">
body {
  padding: 50px;
  background: #E5E5E5;
  border: none;
}
.wrapper {
  display: flex;
}
</style>
