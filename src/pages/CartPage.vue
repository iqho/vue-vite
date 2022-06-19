<template>
    <div class="container">
        <h3>Shopping Cart ( {{ cart.length }} )</h3>
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in cart" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ product.title }}</td>
                    <td><img :src="product.image" height="40" width="50"/></td>
                    <td>{{ '$' + product.price }}</td>
                    <td>1</td>
                    <td>{{ '$' + product.price * 1 }}</td>
                    <td><a class="btn btn-primary" @click="removeItem(index)">Remove Cart</a></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-end"><strong>Total</strong></td>
                    <td><strong>{{ '$'+ totalPrice }}</strong></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    
    name: "Shopping",

    computed: {

        StoreCart() {
            return this.$store.getters.storeCart;
        },

        cartCount() {
            return this.storeCart.length;
        },

        total() {
            return this.$store.getters.storeCartTotal;
        },

        totalPrice() {
            let total = 0;
            this.cart.forEach(item => {
                total += item.price * 1;
            });

            return total.toFixed(2);
        },

        cart() {
            return this.$store.getters.storeCart.map(cartitems => {
                return this.$store.getters.products.find(itemForSale => {
                return cartitems === itemForSale.id;
                });
            });
        }

    },

    methods: {
        removeItem(index) {
            this.$store.dispatch("removeItem", index);
        },
    }
};

</script>

<style>

</style>