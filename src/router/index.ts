import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginVue from '@/components/Login.vue'
import RegistroVue from '@/components/Registro.vue'
import CrudVue from '@/components/Crud.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: CrudVue
    },
    {
      path: '/registro-usuario',
      name: 'registro',
      component: RegistroVue
    },
    {
      path: '/iniciar-sesion',
      name: 'inicio',
      component: LoginVue
    }
  ]
})

export default router