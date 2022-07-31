<template>
  <div class = "Item">
    <img :src = item.imgURL alt = "Не удалось загрузить изображение">
    <h1>{{item.name}}</h1>
    <p>{{item.description}}</p>
    <h2>{{newCost(item.cost)}} руб.</h2>
    <div class ="DeleteButton" @click="deleteItem(item)"></div>
  </div>
</template>

<script>

export default {
  name: 'SingleItem',
  props: ['item'],
  methods: {
    newCost(number) {
      return Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      }).format(number)
    },
    deleteItem(item) {
      this.$store.commit('deleteItem', item);
    }
  }
}
</script>

<style lang="scss">
.Item {
  display: grid;
  height: 423px;
  width: 332px;
  min-width: 332px;
  border-radius: 4px;
  box-shadow: 1px 2px 2px grey;
  background: #FFFEFB;
  margin-left: 16px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  position: relative;
  .DeleteButton {
    display: none;
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background-color: #FF8484;
    background-image: url(../assets/delete.svg);
    background-repeat: no-repeat;
    background-position: center;
    right: -10px;
    top: -10px;
  }
  :hover ~ .DeleteButton{
    display: block;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  img{
    height: 200px;
    width: 100%;
  }
  h1,h2,p {
    font-size: 16px;
    max-width: calc(100%-32);
    overflow-y: auto;
    scroll-snap-type: y;
    margin: 16px;
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 24px;
  }
}
</style>