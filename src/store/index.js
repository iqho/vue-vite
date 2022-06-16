import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    cart: []
  },

  getters: {
    getProducts: (state) => state.products
  },


  actions: {
    async fetchProducts({ commit }) {
        try {
          const data = await axios.get('https://fakestoreapi.com/products')
            commit('SET_PRODUCTS', data.data);
            
          }
          catch (error) {
              alert(error)
              console.log(error)
          }
      }
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
      //console.log(state.products);
    },

    addCartItem(state, item) {
      item.quantity = 1;
      state.cart.push(item);
    },
    updateCartItem(state, updatedItem) {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == updatedItem.id) {
          return updatedItem;
        }

        return cartItem;
      });
    },
    removeCartItem(state, item) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.id != item.id;
      });
    }
  }
});