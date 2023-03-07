<script>

export default {
  data() {
    return {
      login: false
    }
  }
}
</script>

<template>
  <div v-if="this.login">
    <p>home</p>
  </div>

  <div v-else class="telaLogin">
    <div>
      <img src="../../public/logo.png" alt="Logo">

      <span>
        
      </span>
    </div>
  </div>
  
</template>
