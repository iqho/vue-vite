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
                            <h3> {{ filterProducts.length }} Products under {{ $route.params.name }}</h3>
                        </div>

                        <div class="col-12">
                            <div class="row g-0">
                                <div class="col-4">
                                    <div class="input-group d-flex align-items-center">
                                        <button v-on:click="resetOptions" class="btn btn-danger shadow-none me-2">Reset</button>
                                        <input type="number" v-model="minRange" class="form-control shadow-none" placeholder="Min">-
                                        <input type="number" v-model="maxRange" class="form-control shadow-none" placeholder="Max">
                                    </div>
                                </div>
                                <div class="col-5 d-flex align-items-center">
                                    <div class="input-group ms-1">
                                        <input type="text" v-model.trim="title" class="form-control shadow-none" placeholder="Search Products By Name" /> 
                                    </div>
                                </div>
                                <div class="col-3 d-flex align-items-center">
                                    <select v-model="orderBy" class="form-select shadow-none float-end ms-1" style="max-width:200px !important">
                                        <option value="" selected>Sort By</option>
                                        <option value="1">Name (A-Z)</option>
                                        <option value="2">Name (Z-A)</option>
                                        <option value="3">Price Low to High</option>
                                        <option value="4">Price High to Low</option>
                                        <option value="5">Newest to Oldest</option>
                                        <option value="6">Oldest to Newest</option>
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

export default {
    name: 'CategoryWiseProducts',
    props: {
        name: {
            type: String,
            required: true
        }
    },

    data(){
        return{
            title: '',
            minRange: '',
            maxRange: '',
            orderBy: '',
        }
    },

    components: {
        CategoryList
    },

    computed: {

        filterProducts: function(){
            return this.filterProductsByName(this.filterProductsByCategory(this.filterProductsByRange(this.filterProductsByPrice(this.$store.getters.products))))
        },
    },

    methods: {
        addToCart(id) {
            this.$store.dispatch("addItem", id);
        },

        filterProductsByCategory: function(products){
            return products.filter(product => !product.category.indexOf(this.name))
        },

        filterProductsByName: function(products) {
            return products.filter(product => { return product.title.toLowerCase().includes(this.title.toLowerCase())
            })
        },

        filterProductsByRange: function(products){
            return products.filter(product => (product.price >= (this.minRange ? this.minRange : 0) && product.price <= (this.maxRange ? this.maxRange : Math.max(product.price))))
        },

        filterProductsByPrice: function(products){
            const orderBy = this.orderBy;
            return products.sort((a, b) => {

                if (orderBy === '1') {
                return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1;
                }
                else if (orderBy === '2') {
                return (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1;
                }
                else if (orderBy === '3') {
                return a.price - b.price;
                } 
                else if (orderBy === '4') {
                return b.price - a.price;
                }
                else if (orderBy === '5') {
                return b.id - a.id;
                }
                else if (orderBy === '6') {
                return a.id - b.id;
                }
            });
        },

        resetOptions:function(){
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