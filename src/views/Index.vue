<template>
  <div><h1>Home Page</h1></div>

  {{ $store.state.bookList }}

<ul>
  <li v-for="(book, index) in $store.state.bookList" :key="index">{{ book }}</li>
</ul>

  <button type="button" @click="$store.state.count++" class="btn btn-danger">Count is: {{ $store.state.count }}</button>
  </template>

<script>
export default {

}
</script>

<style>

</style>