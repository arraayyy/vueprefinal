<template>
  <div class="home">
    <prodDetails 
      :product="product"
      :active="active.productDeets" 
      v-on:closeProd="closeProduct()" />

    <div class="product-container">
      <productCard 
        v-for="product in items"
        :key="product.id" 
        :product="product"
        v-on:viewProd="viewProduct($event)" />
    </div>
  </div>
</template>

<script>

import items from '../data/items.js'
import productCard from '../components/products/productCard.vue'
import prodDetails from '../components/products/prodDetails.vue'

export default {
  name: 'Home',
  components: {
    productCard, prodDetails
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        productDeets: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      // this.$router.push({ name: 'Product', params: { id: product.id } })
      this.product = product
      this.active.productDeets = true
      console.log(this.product)
    },
    closeProduct() {
      this.active.productDeets = false
    }
  }
}
</script>

<style>
  .product-container {
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap ;
    justify-content: center;
  }
</style>