<template>
  <div class="ItemCatalog">
    <SingleItem v-for="item in items" :key ="item.id" :item = "item">
    </SingleItem>
  </div>
</template>

<script>
import SingleItem from './SingleItem.vue'

export default {
  name: 'ItemCatalog',
  props: ['items'],
  components: {
    SingleItem
  },
  mounted() {
    this.$store.commit('loadStore');
  }
}
</script>

<style lang="scss">
.ItemCatalog {
  width: 1100px;
  min-width: 1100px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>