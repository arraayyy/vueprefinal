import { createStore } from 'vuex'

function update(cart){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters:{
    product: state => product =>{
      const item= state.cart.find(i=> i.id === product.id)
      if(item){
        return item.quantity
      } else {
        return null
      }
    },
    cartItems: state => {
      return state.cart
    }
  },
  mutations: {
    addToCart(state, product){
      let item = state.cart.find(i=> i.id === product.id)
      
      if(item){
        item.quantity++
      }else{
        state.cart.push({...product, quantity: 1})
      }
      update(state.cart)
    },
    removetoCart(state, product){
      let item = state.cart.find(i=>i.id === product.id)

      if(item){
        if(item.quantity > 1){
          item.quantity--
        }else{
          state.cart = state.cart.filter(i=>i.id !== product.id)
        }
      }
      update(state.cart)
    },
    updatingCart(state){
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
