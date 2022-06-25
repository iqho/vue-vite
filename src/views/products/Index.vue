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
                            <h3> List of All Products</h3>
                        </div>
                        <div class="col-12">
                            <div class="row g-0">
                                <div class="col-2">
                                    <label for="Range" class="form-label text-center mb-0">Price (0 - {{ range }})</label><br>
                                    <input type="range" v-model.trim="range" class="form-range" min="0" max="20000" step="1" id="Range" style="max-width:180px !important">
                                </div>
                                <div class="col-4 d-flex align-items-center">
                                    <div class="input-group">
                                        <button v-on:click="resetOptions" class="btn btn-danger shadow-none mx-1">Reset</button>
                                        <select v-model="category" class="form-select shadow-none float-end ms-1">
                                        <option value="" selected>Filter By Category</option>
                                        <option v-for="(cat, index) in categories" :key="index">
                                            <option v-if="productsCount(cat) > 0" :value="cat">{{ cat }}</option>
                                        </option>
                                    </select>
                                    </div>
                                </div>
                                <div class="col-4 d-flex align-items-center">
                                    <div class="input-group ms-1">
                                        <input type="text" v-model.trim="title" class="form-control shadow-none" placeholder="Search Products By Name" /> 
                                    </div>
                                </div>
                                <div class="col-2 d-flex align-items-center">
                                    <select v-model="orderBy" class="form-select shadow-none float-end ms-1" style="max-width:200px !important">
                                        <option value="" selected>Filter By</option>
                                        <option value="1">Price Low to High</option>
                                        <option value="2">Price High to Low</option>
                                        <option value="3">Newest to Oldest</option>
                                        <option value="4">Oldest to Newest</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div v-for="(product, index) in filterProducts" :key="index">
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
<Pagination  />


                            
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

import CategoryList from '../../partials/CategoryList.vue';
import Pagination from '../../components/Pagination.vue';

export default {

    data(){
        return{
            category: '',
            title: '',
            range: '20000',
            orderBy: '',
        }
    },
    
    components: {
        CategoryList, Pagination
    },

    mounted() {
        this.$store.dispatch("fetchCategories");
        this.$store.dispatch("fetchProducts");
    },

    computed: {
        categories() {
            return this.$store.getters.categories;
        },

        filterProducts: function(){
            return this.filterProductsByName(this.filterProductsByCategory(this.filterProductsByRange(this.filterProductsByPrice(this.$store.getters.products))))
        },
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        },

        filterProductsByCategory: function(products){
            return products.filter(product => !product.category.indexOf(this.category))
        },

        filterProductsByName: function(products) {
            return products.filter(product => !product.title.toLowerCase().indexOf(this.title.toLowerCase()))
        },

        filterProductsByRange: function(products){
            return products.filter(product => (product.price >= 0 && product.price <= this.range) ? product : '')
        },

        filterProductsByPrice: function(products){
            const orderBy = this.orderBy;
            return products.sort((a, b) => {
                if (orderBy === '1') {
                return a.price - b.price;
                } 
                else if (orderBy === '2') {
                return b.price - a.price;
                }
                else if (orderBy === '3') {
                return b.id - a.id;
                }
                else if (orderBy === '4') {
                return a.id - b.id;
                }
            });
        },

        productsCount(category){
            return this.$store.getters.products.filter(product => !product.category.indexOf(category)).length;
        },

        resetOptions:function(){
            this.category='',
            this.title='',
            this.range='20000'
        },


    },

}
</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>