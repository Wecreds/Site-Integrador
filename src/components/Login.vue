<template>
    <section>
        <div class="telaCadastre">
    <div class="cadastre">
      <img src="../../public/logo.png" alt="Logo">

          <p>Cadastre-se:</p>

          <div class="cadastreInput">
            
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Senha" v-model="password">
          </div>

          <div class="cadastreBtns">
            <button @click="registre, $emit('logarUser')" class="cadastrar">Cadastre-se</button>
          </div>
    </div>
  </div>

  <div class="telaLogin">
    <div class="login">
      <img src="../../public/logo.png" alt="Logo">

          <p>Faça seu login:</p>

          <div class="loginInput">
            <input type="text" placeholder="email">
            <input type="password" placeholder="senha">
          </div>

          <div class="loginBtns">
            <button class="entrar">Entrar</button>
          </div>
    </div>
  </div>
    </section>
</template>

<script setup>

import { ref } from "vue";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");

const router = useRouter();

const emit = defineEmits(['logarUser'])

const registre = () => {
  createUserWithEmailAndPassword( getAuth(), email.value, password.value )
    .then((data) => {
      console.log("Sucesso");
      router.push('/quiz');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message)
    })
};


  
</script>

<style scoped>

section {
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    background-image: url(../../public/image.jpg);
    background-repeat: no-repeat;
    background-size: cover
}
    .telaLogin , .telaCadastre{
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }

  .login , .cadastre{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 80%;
    gap: 10%;
    padding: 1%;
    background-color: #45593F;
    border-radius: 20px;
  }

  .login > p , .cadastre > p{
    font-size: 1.6rem;
    text-align: center;
    color: #F2F2EB;
  }

  .login > *, .loginInput > *, .cadastre > *, .cadastreLogin > * {
    width: 100%;
  }

  .loginInput , .cadastreInput {
    display: flex;
    flex-direction: column;
    gap: 10%;
  }

  .loginInput > input , .cadastreInput > input{
    outline: none;
    padding: 1%;
    margin: 1%;
  }

  .loginBtns , .cadastreBtns {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 2% 1% 2%;
  }

  .loginBtns > button , .cadastreBtns > button{
    width: 40%;
  }
</style>