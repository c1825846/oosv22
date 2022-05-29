import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    categories: [],
  },
  getters: {
    items(state){
      return state.items
    },
    categories(state) {
      return state.categories
    }
  },
  mutations: {
    setItems(state, items){
     state.items = items
    },
    setCategories(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    fetchItems(context) {
      fetch('/api/item').then(response => response.json()).then(data => {
        context.commit('setItems', data)
      })
    },
    fetchCategories(context) {
      fetch('/api/category').then(response => response.json()).then(data => {
        context.commit('setCategories', data)
      })
    }
  },
  modules: {
  }
})
