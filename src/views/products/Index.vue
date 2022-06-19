<template>
  <div>
    <div class="row g-0 m-2"> 
        <div class="col-md-6">
            <button class="btn btn-primary ms-2 mb-2 float-start" style="width:200px">Total: {{ total }}</button>
        </div>
        <div class="col-md-6 text-end">
        </div>
    </div>
        <div class="row p-2 mb-2"><div class="col-12 text-center border-bottom border-gray"><h1>{{ pageTitle }}</h1></div></div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card h-100" >
                    <img :src="product.image" class="card-img-top" :alt="product.title" style="height:250px">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description.substring(0, 150) }}</p>
                    </div>
                    <div class="card-footer text-center fs-5 p-1">
                        <button class="btn btn-success btn-sm float-start" v-on:click="addToCart(product.id)">+</button>
                        <small class="text-primary">Price: ${{ product.price }}</small>
                        <button class="btn btn-danger btn-sm float-end" v-on:click="removeFromCart(product.id)">-</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {  
    data() {
        return {
            
        }
    },

    computed: {
        pageTitle() {
            return this.$store.getters.pageTitle;
        },

        products() {
            return this.$store.getters.products;
        }
    },
    
    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        }
                
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    },
}
</script>