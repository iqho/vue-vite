<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light container">
            <div class="container-fluid px-2">
                <a class="navbar-brand" href="/">
                   <img src="../assets/logo.png" alt="logo" width="40" height="30"> Vue Vite
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link to="/" class="nav-link border-end border-gray" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/products" class="nav-link border-end border-gray" active-class="active">Products</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/cart" class="nav-link border-end border-gray" active-class="active">Cart</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/about" class="nav-link border-end border-gray" active-class="active">About</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
                    </li>
                </ul>
                <button type="button" @click="$store.state.count++" class="btn btn-danger">Count is: {{ $store.state.count }}</button>
                <div class="btn-group">
                    <a class="btn btn-outline-danger position-relative" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {{ cartCount }}
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end p-2" style="width:500px">
                        <!-- <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in cartData" :key="product.id">
                                    <td>{{ product.title }}</td>
                                    <td>${{ product.price }}</td>
                                    <td>{{ product.quantity }}</td>
                                    <td>${{ product.price * product.quantity }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3" class="text-end"><strong>Total</strong></td>
                                    <td><strong>$42000</strong></td>
                                </tr>
                            </tfoot>
                        </table> -->
                    </div>
                </div>
                <!-- <button type="button" @click="$store.state.count++" class="btn btn-danger ms-4">Count is: {{ $store.state.count }}</button> -->


                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

        name: 'Navbar',

        computed:{

            cartCount() {
                return this.$store.getters.storeCart.length;
            },
        }
    }

</script>

<style>
.active{
    background-color: #86cc8a;
    border-radius: 5px 5px 0 0;
}
</style>

