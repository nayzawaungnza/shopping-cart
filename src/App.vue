<template>
  <div>
    <Master/>
     <router-view></router-view>
  </div>
</template>
<script>
import Master from './layouts/Master.vue'
export default {
  name:'App',
    components:{
    Master,
  }
}
</script>



