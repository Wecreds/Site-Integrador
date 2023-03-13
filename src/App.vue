<script>
import { RouterLink, RouterView } from 'vue-router'
import Cabeçalho from './components/Cabeçalho.vue'
import Login from './components/Login.vue'

export default {
  data() {
    return {
      loginA: false
    }
  },
    components: {
      Cabeçalho,
      Login
    },
    mounted () {
      console.log(this.$firebase)
    },
    methods: {
      logarFunc() {
        this.loginA = true
      }
    }
}
</script>

<template>

<section v-if="loginA">
  <Cabeçalho/>

<RouterView/>

</section>

<Login v-else @logar-user="logarFunc"/>
    
  
   
</template>

<style scoped>

    
</style>
