<template>
    <div>
      <Loader v-if="isLoad"></Loader>
            <div class="container" v-show="!isLoad">
                <div class="row">
                    <div class="col-md-3" v-for="(product,index) in products" v-bind:key="index">
                        <div class="card mb-3">
                          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img  v-bind:src="product.image" class="img-fluid w-100" />
                            <a href="#!">
                              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">{{product.title}}</h5>
                            <p class="card-text">{{product.description}}</p>
                            <small>Price : ${{product.price}}</small>
                            <hr>
                            <a @click="addToCart(product)" class="btn btn-primary">Add to Cart</a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { logicalExpression } from '@babel/types';
import axios from 'axios'
export default {
    name: "Product",
    components: { Loader },
    data(){
      return{
        isLoad : true,
        products:[],
      }
    },
    created(){
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        //console.log(response.data);
        this.products = response.data;
        this.isLoad = false;
      }).catch();
    },
    methods:{
      addToCart(product){
        var cart = this.$root.cart;
        var isInCart = cart.find((v)=>{
          return v.id == product.id;
        });
        if (isInCart) {
          isInCart.qty++;
        }else{
           cart.push({...product,qty:1});
        }
        //console.log(cart);
       
      }
    }
}
</script>