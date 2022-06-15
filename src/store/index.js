import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0,
        bookList:['Book 1', 'Book 2', 'Book 3']
      }
    },

    mutations: {
      increment (state) {
        state.count++
      }
    }
  });

  export default store;