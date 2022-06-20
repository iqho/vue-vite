<template>
    <div class="container">
        <h3>Shopping Cart ( {{ cartCount }} )</h3>
        <CartItem />
        <div class="row g-0">
            <div class="col-12 text-center">
                <a class="btn btn-lg btn-success" style="width:200px" @click="goToCheckout()">Checkout</a>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
    
    name: "CartPage",

    components: {
        CartItem
    },

    computed: {
        cartCount(){
                return this.$store.getters.storeCart.length;
        }
    },

    methods:{
        goToCheckout(){
           this.$router.push('/checkout'); 
        }
    }
};

</script>

<style>

</style>