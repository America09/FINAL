<template>
  <div class="registro">
    <h2 class="title">Registro</h2>
    <form @submit.prevent="register" class="form">
      <label class="form-label" for="username">Nombre:</label>
      <input class="form-input" type="text" id="username" v-model="registerData.name" required>
      <label class="form-label" for="email">Correo:</label>
      <input class="form-input" type="email" id="email" v-model="registerData.email" required>
      <label class="form-label" for="password">Contraseña:</label>
      <input class="form-input" type="password" id="password" v-model="registerData.password" required>
      <button class="button" type="submit">Registrarse</button>
      <button class="button" @click="goToLogin">Iniciar sesión</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const registerData = ref({ name: '', email: '', password: '' })

const router = useRouter();

const register = () => {

  const name = registerData.value.name
  const email = registerData.value.email
  const password = registerData.value.password

if (localStorage.getItem(email) !== null) {
  alert('Ya existe una cuenta con este correo electrónico')
  return
}

  const userData = {
    name: name,
    email: email,
    password: password
  }
  localStorage.setItem(registerData.value.email, JSON.stringify(userData))
  alert('Usuario registrado correctamente')
}
const goToLogin = () => {
router.push('/iniciar-sesion');
}
</script>
  <style scoped>
  .form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background-color: #eb71a4;
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.1);
  }
  .form-label{
    color: white;
    font-size: 17px;
  }
  .button{
font-family: Roboto, sans-serif;
font-weight: 0;
font-size: 14px;
color: #fff;
background-color: #d43879;
padding: 10px 30px;
margin: 5px;
border: solid #e46bff 2px;
border-radius: 50px;
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
transition: background-color 0.3s;
}
.button:hover{
    background-color: #d4387963;
}
.form-input{
    padding: 10px 15px;
  background: none;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
}

</style>