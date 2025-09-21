import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '../components/HomeComponent.vue'
import SobreNosotrosComponent from '../components/SobreNosotrosComponent.vue'
import CursosUniversitariosComponent from '../components/CursosUniversitariosComponent.vue'
import CursosInglesComponent from '../components/CursosInglesComponent.vue'
import ContactoComponent from '../components/ContactoComponent.vue'

const routes = [
{ path: '/', name: 'Home', component: HomeComponent },
{ path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotrosComponent },
{ path: '/cursos-universitarios', name: 'CursosUniversitarios', component: CursosUniversitariosComponent },
{ path: '/cursos-ingles', name: 'CursosIngles', component: CursosInglesComponent },
{ path: '/contacto', name: 'Contacto', component: ContactoComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
