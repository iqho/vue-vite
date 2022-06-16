<template>
  <div><h1>Home Page</h1></div>



<ul>
  <li v-for="(book, index) in products" :key="index">{{ book.title }}</li>
</ul>

  <!-- <button type="button" @click="$store.state.count++" class="btn btn-danger">Count is: {{ $store.state.count }}</button> -->
  </template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    }
  },

}
</script>

<style>

</style>