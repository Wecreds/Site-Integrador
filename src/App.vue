<script>
import { RouterLink, RouterView } from 'vue-router'
import Cabeçalho from './components/Cabeçalho.vue'
import Login from './components/Login.vue'

export default {
  data() {
    return {
      login: false
    }
  },
    components: {
      Cabeçalho,
      Login
    },
    mounted () {
      console.log(this.$firebase)
    }
}
</script>

<template>

<section v-if="login">
  <Cabeçalho/>

<RouterView/>

</section>

<Login v-else/>
    
  
   
</template>

<style scoped>

    
</style>
