<template>
    <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <h5 class="py-1 g-0">Categories</h5>
          </li>

          <li v-for="(category, index) in categories" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            <h6 class="py-1 g-0">
              <router-link :to="`/products/category/${category}`" :name="category" class="p-2">
                <i class="fa-solid fa-angles-right me-1"></i> {{ category }}
              </router-link>
            </h6>
          </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'CategoryList',

      mounted() {
          this.$store.dispatch("fetchCategories");
      },

      computed: {
          categories() {
              return this.$store.getters.categories;
          }
      },
  }
</script>

<style lang="css" scoped>
    .routerLink{
        text-decoration: none;
    }
</style>