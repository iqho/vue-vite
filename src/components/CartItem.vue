<template>
    <div class="container">
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th style="width:10%">#</th>
                    <th style="width:30%">Name</th>
                    <th style="width:20%">Image</th>
                    <th style="width:10%">Price</th>
                    <th style="width:10%">Quantity</th>
                    <th style="width:10%">SubTotal</th>
                    <th style="width:10%">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in cart" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ product.title }}</td>
                    <td><img :src="product.image" height="40" width="50"/></td>
                    <td>{{ '$' + product.price }}</td>
                    <td>
                        <input type="number" class="form-control" min="1" :value="product.quantity" @change="updateQuantity(product.id)" />
                    </td>
                    <td>{{ '$' + (product.price * product.quantity).toFixed(2) }}</td>
                    <td><button class="btn btn-danger" @click="removeItem(index)">Remove</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-end fs-5"><strong>Grand Total</strong></td>
                    <td colspan="2" class="text-start fs-5"><strong>{{ '$'+ totalPrice }}</strong></td>
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
             cartItem: this.$store.state.cartItem, 
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
        },

    },

    methods: {
        removeItem(index) {
            this.$store.dispatch("removeItem", index);
        },

        updateQuantity(index)
        {
            this.$store.dispatch("updateQuantity", index);
        }
    }
};
</script>