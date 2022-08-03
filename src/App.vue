<template>
  <div class="wrapper">
    <div class="head">Добавление товара</div>
    <select class="sort" v-model="select">
      <option value="sortById" selected><span>По умолчанию</span></option>
      <option value="sortByCostDown"><span>По убыванию цены</span></option>
      <option value="sortByCostUp"><span>По возрастанию цены</span></option>
      <option value="sortByName"><span>По наименованию</span></option>
    </select>
    <SiteBar></SiteBar>
    <ItemCatalog :items="items"></ItemCatalog>
  </div>
</template>

<script>
import ItemCatalog from './components/ItemCatalog.vue'
import SiteBar from './components/SideBar.vue'
export default {
  name: 'app',
  computed: {
    items() {
      return this.$store.getters.allItems
    }
  },
  data() {
    return {
    select: "sortById"
    }
  },
  watch: {
    select: {
      deep: true,
      handler() {
        this.$store.commit('sortItems', this.select);
      }
    }
  },
  components: {
    SiteBar,
    ItemCatalog,
  }
}
</script>

<style lang="scss">
.head {
  position: absolute;
  top: 30px;
  left: 32px;
  font-size: 28px;
  font-weight: 600;
}
.sort {
  position: absolute;
  height: 36px;
  left: 1305px;
  top: 31px;
  background: #FFFEFB;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  color: #B4B4B4;
  outline: none !important;
}
body {
  position: relative;
  padding-top: 83px;
  padding-left: 32px;
  background: #E5E5E5;
  border: none;
}
.wrapper {
  display: flex;
}
</style>
