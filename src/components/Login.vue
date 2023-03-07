<template>
    <section>
        <div class="telaLogin">
    <div class="login">
      <img src="../../public/logo.png" alt="Logo">

          <p>Faça seu login:</p>

          <div class="loginInput">
            <input type="text" placeholder="email">
            <input type="password" placeholder="senha">
          </div>

          <div class="loginBtns">
            <button class="cadastrar">Cadastre-se</button>
            <button class="entrar">Entrar</button>
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
            <button class="cadastrar">Cadastre-se</button>
            <button class="entrar">Entrar</button>
          </div>
    </div>
  </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

section {
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
}
    .telaLogin {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .login {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    height: 80%;
    gap: 10%;
    padding: 1%;
    background-color: #45593F;
    border-radius: 20px;
  }

  .login > p {
    font-size: 1.6rem;
    text-align: center;
    color: #F2F2EB;
  }

  .login > *, .loginInput > * {
    width: 100%;
  }

  .loginInput {
    display: flex;
    flex-direction: column;
    gap: 10%;
  }

  .loginInput > input {
    outline: none;
    padding: 1%;
    margin: 1%;
  }

  .loginBtns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1% 2% 1% 2%;
  }

  .loginBtns > button {
    width: 40%;
  }
</style>