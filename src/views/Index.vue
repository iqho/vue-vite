<template>
    <div class="row g-0">
      <div class="col-3">
        <CategoryList />
      </div>
      <div class="col-9">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="https://api.time.com/wp-content/uploads/2016/04/roku.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://static.toiimg.com/thumb/msid-78317155,width-1070,height-580,imgsize-1189002,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.hardwaremana.community/uploads/default/original/2X/9/99ae540bb5e8ebea6e6dfe8502748f11a6fd976c.jpeg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    </div>
  </template>

<script>

import CategoryList from '../partials/CategorySidebar.vue';

export default {
    name: 'Header',
    components: {
        CategoryList
    },

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        }
    }
};

</script>

  
  <style scoped>
    .carousel-inner img {
      height: 300px;
    }
  </style>
