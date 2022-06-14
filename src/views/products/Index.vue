<template>
  <div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card h-100" >
                    <img :src="product.image" class="card-img-top" :alt="product.title" style="height:250px">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description.substring(0, 150) }}</p>
                    </div>
                    <div class="card-footer text-center fs-5 p-1">
                        <small class="text-primary">Price: ${{ product.price }}</small>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import axios from "axios";

export default {

    data() {
        return {
            products: [],
        }
    },
    mounted() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.products = response.data;
                console.log(this.products);
            })
            .catch(error => {
                console.log(error)
            })
    },
}

</script>

<style>

</style>