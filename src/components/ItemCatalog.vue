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
  computed: {
    items() {
      return this.$store.getters.allItems
    }
  },
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
  width: 1200px;
  min-width: 1200px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>