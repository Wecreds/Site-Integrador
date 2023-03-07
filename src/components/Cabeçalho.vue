<template>
  <section>
      <div class="links">
          
        <img src="../../public/logo.png" alt="Logo The Quiz">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/quiz">Quiz</RouterLink>
        <RouterLink to="/pontuacao">Pontuação</RouterLink>
      </div>

      <div class="user">
          <span class="userImg"><img src="../../public/user.png" alt="User Imagem" width="30px"></span>
          <div class="userDados">
            <p class="userName">User Name</p>
            <p class="userEmail">useremail@gmail.com</p>
          </div>
          <p class="userPoints">50 pts</p>
      </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          name: "Cabeçalho"
      }
      
  }
}
</script>

<style scoped>
    section {
        display: flex;
        width: 100%;
        height: 7vh;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.5%;
        background-color: #45593F;
    }

    .links {
        display: flex;
        align-items: center;
        gap: 2%;
        width: 80%;
        font-size: 1.6rem;
    }

    .links > img {
        padding-bottom: 0.7%;
    }

    a {
        text-decoration: none;
        color: #F2F2EB;
        margin: 0% 8% 0% 8%;
        padding: 0.5% 1% 0.5% 1%;
    }

    .user {
        display: flex;
        gap: 10%;
        align-items: center;
        color: #F2F2EB;
    }

    .userName {
        color: #F2C53D;
        font-weight: bold;
    }

    .userPoints {
        white-space: nowrap;
        font-weight: bold;
        color: #F2C53D;
        margin-left: 45%;
    }

    .router-link-active, .router-link-exact-active {
        color: #f2f2ebbc;
        text-transform: bolder;
        transition: 0.5s all;
        background: #738C68;
        border-radius: 20px;
    }
</style>
