<template>
    <nav class="navbar navbar-expand-lg navbar-dark static-top" style="background-color: #e3f2fd;">
      <div class="container">
        <router-link to="/" class="navbar-brand" >
          <img src="@/assets/images/logoipsum-226.svg" alt="..." height="">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-dark" aria-current="page" >Home</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/about" class="nav-link text-dark" >About</router-link>
            </li> -->
             <li class="nav-item">
              <router-link to="/product" class="nav-link text-dark" >Product</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/cart" class="nav-link text-dark" >
                <i class="fas fa-shopping-cart"></i>
                <span class="badge bg-danger ms-2">{{ cart.length }}</span>
              </router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>

export default {
    name:'Nav',
  data(){
      return {
          cart:[],//this data in Nav
      }
  },
  created(){
      this.cart = this.$root.cart;
  }
}
</script>