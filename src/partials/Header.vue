<template>
    <div class="container py-1">
        <div class="row g-0 border-bottom border-gray pb-1">
            <nav class="navbar navbar-expand g-0">
                <div class="container-fluid g-0 px-1 py-2">
                    <span class="ps-2 d-none d-lg-block">Welcome to Win Win SP | Largest Bangladeshi E-Commerce</span>
                    <ul class="navbar-nav ms-auto g-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Compare</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Language</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container d-none d-lg-block">
            <div class="row g-0 my-4 ps-2">
                <div class="col-3 text-center pb-1">
                    <a class="navbar-brand" href="/">
                        <img src="https://winwinsp.com/site/images/logo.png" alt="logo" width="250" height="50">
                    </a>
                </div>
                <div class="col-7 d-flex align-items-center">
                    <div class="input-group border border-gray p-1">
                        <input type="text" name="search" placeholder="Search Product" class="form-control shadow-none p-2" style="out">
                        <select name="search-by-category" class="form-select" style="border-left:1px solid #ccc; max-width: 180px">
                            <option value="1">All</option>
                            <option value="2">Computer</option>
                            <option value="1">Grocery</option>
                            <option value="1">Mobile</option>
                        </select>
                        <button name="search" class="btn btn-primary">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="col-2 d-flex align-items-center">
                    <a class="position-relative mx-auto" id="dropdownMenuClickableOutside"
                        data-bs-toggle="offcanvas" data-bs-auto-close="outside" href="#offcanvasExample"
                        aria-expanded="false">
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {{ cartCount }}
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row g-0"><Navbar/></div>
    </div>
</template>
<script>

import Navbar from '../partials/Navbar.vue';

export default {
    name: 'Header',
    components: {
        Navbar
    },

    computed: {
        cartCount() {
            return this.$store.getters.storeCart.length;
        }
    }
};

</script>
<style lang="css" scoped>

    .navbar ul li a{
        color: #000;
        padding: 0px 10px !important;
    }
    .navbar ul li a:hover{
        color: rgb(3, 0, 206);
    }
    .navbar ul li {
        padding: 0px !important;
        border-right:1px solid #ccc
    }
    .navbar ul li:last-child {
        border-right:0px solid #ccc
    }

    select, input {
        border: none;
        outline: none;
    }
    
</style>>



