<template>
    <div class="row g-0">
      <div class="col-3">
        <CategoryList />
      </div>
      <div class="col-9 px-3">
        <Carousel/>
      </div>
      
    </div>
  </template>

<script>

import CategoryList from '../partials/CategoryList.vue';
import Carousel from '../components/Carousel.vue';

export default {
    name: 'Header',
    components: {
        CategoryList, Carousel
    },

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        }
    }
};

</script>

<style scoped>

</style>
