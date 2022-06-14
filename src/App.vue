<script setup>
  import Navbar from './partials/Navbar.vue';
</script>

<template>
  <div class="row g-0">
    <div class="col-12 border-bottom border-gray">
      <Navbar></Navbar>
    </div>
    <div class="col-12 p-3">
      <router-view></router-view>
    </div>
  </div>
</template>
