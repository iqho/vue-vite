<template>
    <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <router-link to="/" class="routerLink">
              <i class="fa-solid fa-computer-classic me-1"></i> Computer
            </router-link>
            <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <router-link to="/" class="routerLink">
              <i class="fa-solid fa-mobile-retro me-1"></i> Mobile
            </router-link>
            <span class="badge bg-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <router-link to="/" class="routerLink">
              <i class="fa-solid fa-basket-shopping me-1"></i> Grocery
            </router-link>
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
    .routerLink{
        text-decoration: none;
    }
</style>