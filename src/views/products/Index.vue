<template>
    <div class="row g-0">
        <div class="col-sm-12 col-md-3">
            <CategoryList />
        </div>
        <div class="col-sm-12 col-md-9">
            <div class="row g-0 mx-3 px-2 border border-gray">
                <div class="col-12">
                    <div class="row p-2 mb-2">
                        <div class="col-12 text-center border-bottom border-gray">
                            <h3> List of All Products</h3>
                        </div>
                        <div class="row g-0 mt-2">
                            <div class="col-7 text-end pe-2" style="padding-top:7px">                             
                                <label for="password" class="form-label">Filter By</label>
                            </div>     
                            <div class="col-2 pe-1">
                                <select v-model="filterName" class="form-select shadow-none w-100">
                                    <option value="1">Date</option>
                                    <option value="2">Price</option>
                                    <option value="3">Name</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select v-model="filterByAD" class="form-select shadow-none w-100">
                                    <option value="1">Order By DESC</option>
                                    <option value="2">Order By ASC</option>
                                </select>
                            </div>    
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div v-for="(product, index) in filterProducts" :key="index">
                            <div class="card h-100">
                                <router-link :to="`/product/${product.id}`" :id="product.id" class="p-2" target="_blank">
                                    <img :src="product.thumbnail" class="card-img-top" :alt="product.title" style="height:130px">
                                </router-link>
                                <div class="card-body g-0">
                                    <h6 class="card-title p-2 text-danger">
                                        <router-link :to="`/product/${product.id}`" :id="product.id" class="router-link" target="_blank">{{ product.title.substring(0, 35) }}</router-link>
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
                    <div class="row g-0 mt-4">
                        <div class="col-12 py-2">
<!-- <Pagination  /> -->


                            
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
            filterName: '1',
            filterByAD: '1',
        }
    },
    
    components: {
        CategoryList, Pagination
    },

    computed: {
        categories() {
            return this.$store.getters.categories;
        },

        filterProducts: function(){
            return this.filterProductsByPrice(this.$store.getters.products)
        },
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        },

        filterProductsByPrice: function(products){
            const filterName = this.filterName;
            const filterByAD = this.filterByAD;
            return products.sort((a, b) => {

                if (filterName === '1' && filterByAD === '1') {
                    return b.id - a.id;
                }

                else if (filterName === '1' && filterByAD === '2') {
                    return a.id - b.id;
                }

                else if (filterName === '2' && filterByAD === '1') {
                    return b.price - a.price;
                }

                else if (filterName === '2' && filterByAD === '2') {
                    return a.price - b.price;
                }

                else if (filterName === '3' && filterByAD === '1') {
                    return (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1;
                }

                else if (filterName === '3' && filterByAD === '2') {
                    return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1;
                }
            });
        },

        productsCount(category){
            return this.$store.getters.products.filter(product => !product.category.indexOf(category)).length;
        },

        resetOptions:function(){
            this.category='',
            this.title='',
            this.minRange=''
            this.maxRange=''
        },


    },

}
</script>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>