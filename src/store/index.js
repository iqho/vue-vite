import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
    state: {
        pageTitle: "List of All Products",
        products: [],
        storeCart: JSON.parse(localStorage.getItem('cart')),
    },

    getters:{
      pageTitle: state => {  
        return state.pageTitle 
      },

      products: state => {  
        return state.products 
      },

      storeCart: state => {  
        return state.storeCart 
      },

      storeCartTotal: state => {
        return state.storeCart.length;
      },

      totalAmount: state => {
        state.total = state.storeCart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);

        return state.total.toFixed(2);
      }
    },
    
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },

        ADD_ITEM(state, id) {
            const record = state.storeCart.find(p => p.id === id);

            if (!record) {
              state.storeCart.push({
                id: id,
                title: state.products.find(p => p.id === id).title,
                price: state.products.find(p => p.id === id).price,
                image: state.products.find(p => p.id === id).image,
                quantity: 1
              })
            } 
            else {
              record.quantity++
            }

        },

        UPDATE_QUANTITY(state, id) {
            const item = state.storeCart.find(p => p.id === id);

            if (item) {
              item.quantity++
            }

        },
    
        REMOVE_ITEM(state, index) {
          state.storeCart.splice(index, 1);
        },

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
        },

        addItem(context, id) {
          context.commit("ADD_ITEM", id);
          localStorage.setItem('cart', JSON.stringify(context.state.storeCart));
        },

        updateQuantity(context, id) {
          context.commit("UPDATE_QUANTITY", id);
          localStorage.setItem('cart', JSON.stringify(context.state.storeCart));
        },
    
        removeItem(context, index) {
          context.commit("REMOVE_ITEM", index);
          localStorage.setItem('cart', JSON.stringify(context.state.storeCart));
        },

    },

})