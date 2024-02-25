<template>
  <div>
    <Login @login-success="loginSesion" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '../components/Login.vue'
import router from '@/router';

const sesionIniciada = ref(false)
const user = ref(null)

const loginSesion = (loggedInUser) => {
  sesionIniciada.value = true
  user.value = loggedInUser
  router.push('/home')
}
</script>


