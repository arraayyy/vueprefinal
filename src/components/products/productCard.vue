<template>
    
    <div class="card card-deck">
        <div class="card text-white bg-dark border-light mb-3 " style="width: 18rem">
            <img class="card-img-top imgs p-3" :src="product.img" alt="Card image cap" />
            <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                Price: ${{ product.price }}.00
                <br>
            </div>
            <div class="card-footer bg-light">
                <button type="button" class="btn btn-dark text-white btn-outline-secondary" @click="$emit('viewProd', product)">View</button>
            </div>
        </div>
    </div>
    
    
</template>

<script>
    export default {
        props: ['product'],
            // img() {
            //     return this.product.img;
            // }
    }
</script>

<style>
.imgs{
    height: 200px !important;
    width: auto !important;
}
.card-deck{
    margin: 10px 10px ;
}
.card{
    padding:3px !important;
}

</style>