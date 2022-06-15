<script>
    export default {
    props: {
        cart:{
            type:Array,
            required: true
        }
    }
    }
</script>

<template>
    <div>
        <button class="btn btn-success ms-2 mb-2" style="width:100px" :style="cart.length === 0 ? {color: 'red'} : {}">Cart ( {{ cart.length }} )</button>
    </div>    
</template>