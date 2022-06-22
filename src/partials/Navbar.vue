<template>
    <div class="g-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-white container border-top border-bottom border-gray" :class="scrollNav ? 'fixed-top' : ''">
            <div class="container-fluid px-2">
                <button class="navbar-toggler ms-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- <a class="btn btn-outline-danger position-relative d-sm-block d-md-block d-lg-none me-auto"
                    id="dropdownMenuClickableOutside" data-bs-toggle="offcanvas" data-bs-auto-close="outside"
                    href="#offcanvasExample" aria-expanded="false">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {{ cartCount }}
                    </span>
                </a> -->

                <a class="navbar-brand d-lg-none mx-auto" href="/">
                    <img src="https://winwinsp.com/site/images/logo.png" alt="logo" width="180" height="30" />
                </a>

                <!-- <a class="btn btn-outline-danger shadow-none position-relative d-sm-block d-md-block d-lg-none ms-auto"
                    id="dropdownMenuClickableOutside" data-bs-toggle="offcanvas" data-bs-auto-close="outside"
                    href="#offcanvasExample" aria-expanded="false">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {{ cartCount }}
                    </span>
                </a> -->

                <a class="position-relative ms-auto me-4 d-sm-block d-md-block d-lg-none"
                    id="dropdownMenuClickableOutside" data-bs-toggle="offcanvas" data-bs-auto-close="outside"
                    href="#offcanvasExample" aria-expanded="false">
                    <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {{ cartCount }}
                    </span>
                </a>

                <div class="offcanvas offcanvas-start g-0 text-center" id="offcanvasNavbar">
                    <div class="offcanvas-header border-bottom border-gray">
                        <h5 class="offcanvas-title mx-auto" id="offcanvasExampleLabel">
                           <img src="https://winwinsp.com/site/images/logo.png" alt="logo" width="180" height="30" />
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <ul class="navbar-nav mb-2 mx-auto" style="min-width:300px">

                        <li>
                            <a class="navbar-brand ms-5" href="/" :style="scrollNav ? 'display:block' : 'display: none'">
                            <img src="https://winwinsp.com/site/images/logo.png" alt="logo" width="180" height="30" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link border-end border-gray" active-class="active">Home
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/products" class="nav-link border-end border-gray" active-class="active">
                                Products</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/cart" class="nav-link border-end border-gray" active-class="active">Cart
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/checkout" class="nav-link border-end border-gray" active-class="active">
                                Checkout
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/about" class="nav-link border-end border-gray" active-class="active">About
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link border-end border-gray" active-class="active">Contact</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">More Pages</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="align-self-center ps-3 d-none d-lg-block">
                            <a class="position-relative mx-auto" id="dropdownMenuClickableOutside"
                            data-bs-toggle="offcanvas" data-bs-auto-close="outside" href="#offcanvasExample"
                            aria-expanded="false" :style="scrollNav ? 'display: block' : 'display: none'">
                                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {{ cartCount }}
                                </span>
                            </a>
                        </li>

                        <li class="align-self-center ps-3 d-none d-lg-block">
                            <a class="position-relative mx-auto" id="dropdownMenuClickableOutside"
                            data-bs-toggle="offcanvas" data-bs-auto-close="outside" href="#offcanvasExample"
                            aria-expanded="false" :style="scrollNav ? 'display: block' : 'display: none'">
                                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {{ cartCount }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom border-gray">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                <h5 class="offcanvas-title mx-auto" id="offcanvasExampleLabel">
                    Cart Item ( {{ cartCount }} )
                </h5>
            </div>
            <div class="offcanvas-body">
                <NavbarCart />
            </div>
        </div>
    </div>
</template>

<script>
import NavbarCart from "../components/NavbarCart.vue";

export default {
    name: "Navbar",
    data() {
        return {
            scrollNav: false,
        }
    },

    components: {
        NavbarCart,
    },

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        },
    },

    methods: {
        handleSCroll(event) {
            if (window.scrollY > 100) {
                return this.scrollNav = true;
            } else if (window.scrollY < 100) {
                return this.scrollNav = false;
            }
        },
    },

    created() {
        window.addEventListener("scroll", this.handleSCroll);

    },
    destroyed() {
        window.removeEventListener("scroll", this.handleSCroll);
    },
};
</script>

<style>
.active {
    background-color: #86cc8a;
    border-radius: 5px 5px 0 0;
}

.hide-logo {
    visibility: hidden !important;
}

.show-logo {
    visibility: visible !important;
}
</style>
