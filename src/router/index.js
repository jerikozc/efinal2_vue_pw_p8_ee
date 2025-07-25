import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorView from '../views/DoctorView.vue'
import PacienteView from '../views/PacienteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/doctor',
    name: 'home',
    component: DoctorView
  },

  {
    path: '/paciente',
    name: 'home',
    component: PacienteView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
