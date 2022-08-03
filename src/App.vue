<template>
  <div class="wrapper">
    <div class="head">Добавление товара</div>
    <select class="sort" v-model="select">
      <option value="0" selected><span>По умолчанию</span></option>
      <option value="1"><span>По убыванию цены</span></option>
      <option value="2"><span>По возрастанию цены</span></option>
      <option value="3"><span>По наименованию</span></option>
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
    select: 0
    }
  },
  methods: {
    sortArray(x, y) {
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
    }
  },
  watch: {
    select: {
      deep: true,
      handler(newValue) {
        switch(newValue) {
          case '0': this.$store.commit('loadStore');
          break;
          case '1': this.items.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
          break;
          case '2': this.items.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
          break;
          case '3': this.items.sort(this.sortArray);
          break;
        }
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
