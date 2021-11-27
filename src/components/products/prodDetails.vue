<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('closeProd')" />

    <div class="card bg-dark text-white drawer" :class="{show: active}">
        <button class="drawerClose btn btn-outline-light float-end mb-2" @click="$emit('closeProd')">
            X
        </button>

        <div v-if="product" class="pDetails">
            <h3 class="text-center fw-bold mt-5">{{ product.name }}</h3>
            <img class="card-img-top imgs p-2" :src="product.img" alt="Card image cap" />
            <p class="text-center fs-4">${{ product.price.toFixed(2) }}</p>
            <p class="text-center text-muted fs-5">{{ product.category }}</p>
            <p class="text-center fs-6">{{ product.description }}</p>

            <div class="cartTotal" v-if="prodTotal">
                <h3>In Cart</h3>
                <h4>{{ prodTotal }}</h4>
            </div>

            <div class="buttonCon mt-5">
                <button class="remove border border-outline-light btn btn-dark btn-outline-light" @click="removetoCart()">Remove</button>
                <button class="add border border-outline-light btn btn-dark btn-outline-light" @click="addToCart()">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product', 'active'],
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product)
            },
            removetoCart(){
                this.$store.commit('removetoCart', this.product)
            }
        },
        computed: {
            prodTotal() {
               return this.$store.getters.product(this.product)
            }
        },
    }
</script>

<style>
    .drawer-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.507);
        z-index: 100;
        display: none;
        transition: display .5s;
    }

    .show {
        display: block;
    }

    .drawer {
        width: 38vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: -290vh;
        padding: 15px;
        transition: left 0.5s;
        z-index: 101;
        overflow-y: scroll;
    }

    .show {
        left: 0;
    }

    .drawerClose {
        right: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        color: gray;
        
    }

    .drawerClose:hover {
        color: black;
        background-color: lightgray;
    }

    .pDetails {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .buttonCon button{
        width: 150px;
        border: none;
        padding: 10px;
        border-radius: 5px;
        margin: 0 5px 50px 5px;
        cursor: pointer;
    }

    @media (min-wdith: 500px) {
        .drawer {
            width: 450px;
        }
    }
</style>