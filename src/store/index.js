import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
    state: {
        products: [],
        pageTitle: "List of All Products",
        storeCart: [],
        total: 0,
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

        ADD_Item(state, id) {
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
        

         // state.storeCart.push(payload);
         // console.log(payload);
        },
    
        REMOVE_Item(state, index) {
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
          context.commit("ADD_Item", id);
        },
    
        removeItem(context, index) {
          context.commit("REMOVE_Item", index);
        },

    },

})