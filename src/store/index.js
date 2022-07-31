import { createStore } from "vuex";

const store = createStore({
  state: {
    items: []
  },
  mutations: {
    loadStore(state) {
      const items = JSON.parse(localStorage.getItem("items"));
      state.items = items ?? []
    },
    addItem(state, item) {
      state.items.unshift({
        ...item, id:state.items[0]?.id + 1 ?? 1
      });
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    deleteItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
      localStorage.setItem('items', JSON.stringify(state.items))
    }
  },
  getters: {
    allItems(state) {
        return state.items
    }
  }
})

export default store