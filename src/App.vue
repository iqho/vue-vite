<template>
  <div class="row g-0">
    <div class="col-12">
      <Header></Header>
    </div>
    <div class="col-12 p-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
export default {
  name: "App",
  components: {
    Header
  },
};
</script>
