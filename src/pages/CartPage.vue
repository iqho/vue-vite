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
                    <th>SubTotal</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in cart" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ product.title }}</td>
                    <td><img :src="product.image" height="40" width="50"/></td>
                    <td>{{ '$' + product.price }}</td>
                    <td><input type="number" :value="product.quantity" @change="updateSubTotal(index)" /></td>
                    <td>{{ '$' + product.price * product.quantity }}</td>
                    <td><a class="btn btn-primary" @click="removeItem(index)">Remove Cart</a></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end"><strong>Grand Total</strong></td>
                    <td colspan="2" class="text-start"><strong>{{ '$'+ totalPrice }}</strong></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    
    name: "Shopping",

    data() {
        return {
            quantity: 1,  
        }
    },

    computed: {

        StoreCart() {
            return this.$store.getters.storeCart;
        },

        cartCount() {
            return this.storeCart.length;
        },

        totalPrice() {
            return this.$store.getters.totalAmount;
        },

        cart() {
            return this.$store.getters.storeCart.map(cartitems => {
                return this.$store.getters.storeCart.find(itemForSale => {
                return cartitems.id === itemForSale.id;
                });
            });
        }

    },

    methods: {
        removeItem(index) {
            this.$store.dispatch("removeItem", index);
        },

        updateSubTotal(index) {
            this.storeCart[index].quantity = index.target.value;
        }
    }
};

</script>

<style>

</style>