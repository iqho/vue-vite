<template>
    <div class="row g-0">
        <div class="col-3">
            <CategoryList />
        </div>
        <div class="col-9">
            <div class="row g-0 mx-3 px-2 border border-gray">
                <div class="col-12">
                    <div class="row p-2 mb-2">
                        <div class="col-12 text-center border-bottom border-gray">
                            <h3> List of All Products from {{ $route.params.name }}</h3>
                        </div>
                        <div class="col">
                            <select name="orderby" id="" class="form-select shadow-none float-end w-25 mt-2">
                                <option value="1">Order By Name</option>
                                <option value="2">Order By Date</option>
                                <option value="3">Order By Price</option>
                            </select>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div v-for="(product, index) in products" :key="index">
                            <div class="card h-100">
                                <router-link :to="`/product/${product.id}`" :id="product.id" class="p-2">
                                    <img :src="product.thumbnail" class="card-img-top" :alt="product.title" style="height:130px">
                                </router-link>
                                <div class="card-body g-0">
                                    <h6 class="card-title p-2 text-danger">
                                        <router-link :to="`/product/${product.id}`" :id="product.id" class="router-link">{{ product.title.substring(0, 35) }}</router-link>
                                    </h6>
                                </div>
                                <div class="card-footer text-center fs-5 p-1">
                                    <small class="text-primary float-start ms-2"> ${{ product.price }}</small>
                                    <button class="btn btn-outline-danger btn-sm float-end" v-on:click="addToCart(product.id)">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 mt-3">
                        <div class="col-12">
                            <nav aria-label="...">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">4</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CategoryList from '../../partials/CategoryList.vue';

export default {
    name: 'CategoryWiseProducts',
    props: {
        name: {
            type: String,
            required: true
        }
    },

    components: {
        CategoryList
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    },

    computed: {
        products() {
            //return this.$store.getters.products;
            // this.$store.getters.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
            // return this.$store.getters.products.filter(product => !product.category.toLowerCase().indexOf(this.name.toLowerCase()))
           
    
          
          // Working
         // return this.$store.getters.products.filter(product => (product.price <= 20) ? product : '')
           // return this.$store.getters.products.filter(product => (product.price >= 0 && product.price <= this.range) ? product : '')

             return this.$store.getters.products.filter(product => !product.category.indexOf(this.name))
        }
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        }
    },

}
</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>