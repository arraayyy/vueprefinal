<template>
  <nav>
    <div class="nav nav-tabs justify-content-center mb-4" id="nav-tab" role="tablist">
      <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link> |
      <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script> 
  export default {
    mounted() {
      this.$store.commit('updatingCart')
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body {
  background-color: black 
} 

a {
  font-weight: bold;
  color: darkgray;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;
  
}

a:active {
  color: #2c3e50;
}


</style>
