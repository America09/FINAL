<template>
  <div class="login">
    <h2 class="title">Login</h2>
    <form  @submit.prevent="login" class="form">
      <label class="form-label" for="email">Email: </label>
      <input
        class="form-input"
        type="email"
        id="email"
        required
        v-model="loginData.email"
      />
      <label class="form-label" for="password">Contraseña: </label>
      <input
        class="form-input"
        type="password"
        id="password"
        required
        v-model="loginData.password"
      />
      <button class="button" type="submit">Iniciar sesión</button>
      <button class="button" @click="goToRegister">Registrarse</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const loginData = ref({ email: '', password: '' })

const router = useRouter();

const login = () => {
const storedUserString = localStorage.getItem(loginData.value.email)
if (storedUserString !== null) {
  const storedUser = JSON.parse(storedUserString)
  if (storedUser.password === loginData.value.password) {
    alert('Inicio de sesión exitoso')
    router.push('/home')
  } else {
    alert('Correo o contraseña incorrectos')
  }
} else {
  alert('El correo proporcionado no está registrado')
}
}

const goToRegister = () => {
router.push('/registro-usuario');
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
.table {
width: 50%;
border-collapse: collapse;
margin: 3rem auto;
background-color: #eb71a4;
border-radius: 5px;
box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.1);
}
.table th,
.table td {
padding: 0.5rem;
text-align: left;
color: white;
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
.buttonForm{
font-family: Roboto, sans-serif;
font-weight: 0;
font-size: 12px;
color: #fff;
background-color: #d43879;
padding: 10px 30px;
border: solid #e46bff 2px;
border-radius: 50px;
align-items: center;
cursor: pointer;
transition: background-color 0.3s;
}
.buttonForm:hover{
background-color: #d4387963;
}
.form-input{
padding: 10px 15px;
background: none;
border: 1px solid white;
border-radius: 20px;
color: white;
}
.buttonD{
display: flex;
justify-content: flex-end;
align-items: flex-start;
}
.buttonC{
font-family: Roboto, sans-serif;
font-weight: 0;
font-size: 14px;
color: #fff;
background-color: #d43879;
padding: 10px 30px;
margin: 1rem;
border: solid #e46bff 2px;
border-radius: 50px;
cursor: pointer;
display: flex;
justify-content: flex-end;
align-items: flex-start;
}
.buttonC:hover{
background-color: #d4387963;
}

</style>