<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <table class="table align-middle mb-0 bg-white table-hover table-striped">
                      <thead class="bg-light">
                        <tr>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Action</th>
                          <th>QTY</th>
                          <th>Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product,index) in cart" v-bind:key="index" >
                          <td>
                            <div class="d-flex align-items-center">
                              
                              <div class="ms-3">
                                <p class="fw-bold mb-1">{{ product.title }}</p>
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            <img
                              :src="product.image"
                              alt=""
                              style="width: 60px; height: 60px"
                              class="img-thumbnail"
                              />
                          </td>
                          <td>
                            <button @click="increaseQty(product)" class="btn btn-success btn-sm m-2">+</button>
                            <button @click="reduceQty(product)" class="btn btn-danger btn-sm m-2">-</button>
                          </td>
                          <td>{{ product.qty }}</td>
                          <td>
                            $ {{ product.price }}
                          </td>
                          <td>{{ product.qty * product.price }}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Cart',
    data(){
        return{
            cart:[]
        }
    },
    methods:{
        increaseQty(product){
            //console.log(product);
            product.qty++;
        },
        reduceQty(product){
            //console.log(product);
            product.qty--;
        }
    },
    created(){
        this.cart = this.$root.cart;
    }
    
}
</script>