import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        products: [],
        count: 0,
    },

    
    actions: {
      async fetchProducts({ commit }) {
          try {
            const response = await axios.get('https://fakestoreapi.com/products')
              commit('SET_PRODUCTS', response.data)
            }
            catch (error) {
               // console.log(error)
            }
        }
    },

    mutations: {
      SET_PRODUCTS(state, products) {
          state.products = products
      },
    },
})