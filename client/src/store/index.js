import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        categories: [],
        cart: [],
        user: null,
    },
    getters: {
        items(state) {
            return state.items
        },
        categories(state) {
            return state.categories
        },
        cart(state) {
            return state.cart
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        setItems(state, items) {
            state.items = items
        },
        setCategories(state, categories) {
            state.categories = categories
        },
        addItemToCart(state, item) {
            let alreadyInCart = false
            state.cart.forEach(cartItem => {
                if (cartItem.item._id === item.item._id) {
                    cartItem.quantity++
                    alreadyInCart = true
                }
            })
            if (!alreadyInCart)
                state.cart.push(item)
        },
        incrementItem(state, id) {
            const item = state.cart.find(item => item.item._id === id)
            item.quantity++
        },
        decrementItem(state, id) {
            state.cart.forEach((item, index) => {
                if (item.item._id === id) {
                    item.quantity--
                    if (item.quantity <= 0) {
                        state.cart.splice(index, 1)
                    }
                }
            })
        },
        clearCart(state) {
            state.cart = []
        },
        setUser(state, user) {
            state.user = user
        },
        clearUser(state) {
            state.user = null
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
        },
    },
    modules: {}
})
