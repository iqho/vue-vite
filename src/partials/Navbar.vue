<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid px-2">
            <a class="navbar-brand" href="/">
                <img src="../assets/logo.png" alt="logo" width="30" height="30">
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
                <router-link to="/about" class="nav-link border-end border-gray" active-class="active">About</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.active{
    background-color: #86cc8a;
    border-radius: 5px 5px 0 0;
}
</style>