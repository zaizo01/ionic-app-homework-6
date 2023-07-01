import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import ClimaRd from '../views/ClimaRd.vue';
import UniversidadesPorPais from '../views/UniversidadesPorPais.vue';
import PredecirEdad from '../views/PredecirEdad.vue';
import PredecirGenero from '../views/PredecirGenero.vue';
import AboutMe from '../views/AboutMe.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/predecir-genero',
    component: PredecirGenero
  },
  {
    path: '/clima-rd',
    component: ClimaRd
  },
  {
    path: '/predecir-edad',
    component: PredecirEdad
  },
  {
    path: '/universidad-por-pais',
    component: UniversidadesPorPais
  },
  {
    path: '/about-me',
    component: AboutMe
  }
]
// Cristopher Zaiz Ortega, 2021-0949
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
