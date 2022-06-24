<template>
    <div>
        <div class="list-group">
          <div class="list-group-item d-flex justify-content-between align-items-center">
            <h5 class="py-1 g-0">Categories</h5>
          </div>

          <div v-for="(category, index) in categories" :key="index">
            <h6 class="py-1 g-0 list-group-item d-flex justify-content-between align-items-center border-top-0" v-if="productsCount(category) > 0">
              <router-link :to="`/products/category/${category}`" :name="category" class="routerLink p-2">
                <i class="fa-solid fa-angles-right me-1"></i> {{ category }} ( {{ productsCount(category) }} )
              </router-link>
            </h6>
          </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'CategoryList',

      mounted() {
          this.$store.dispatch("fetchCategories");
          this.$store.dispatch("fetchProducts");
      },

      computed: {
          categories() {
              return this.$store.getters.categories;
          },
      },

      methods:{
        productsCount(category){
            return this.$store.getters.products.filter(product => !product.category.indexOf(category)).length;
          }
      },
      
  }
</script>

<style lang="css" scoped>
    .routerLink{
        text-decoration: none;
    }
</style>