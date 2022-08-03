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
        ...item, id:state.items.length? state.items.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0) + 2 : 1
      });
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    deleteItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    sortItems(state, type) {
      switch(type) {
        case 'sortById': state.items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        break;
        case 'sortByCostDown': state.items.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
        break;
        case 'sortByCostUp': state.items.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
        break;
        case 'sortByName': state.items.sort(
          (x,y) => {
            if (x.name < y.name) {return -1;}
            if (x.name > y.name) {return 1;}
            return 0;
          }
        );
        break;
      }
    }
  },
  getters: {
    allItems(state) {
        return state.items
    }
  }
})

export default store