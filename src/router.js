import { createRouter, createWebHistory } from 'vue-router'
import DrinksPage from './pages/DrinksPage.vue'
import MenuPage from './pages/MenuPage.vue'
import FotosPage from './pages/FotosPage.vue'
import RaumplanPage from './pages/RaumplanPage.vue'
import ImpressumPage from './pages/ImpressumPage.vue'

const routes = [
  { path: '/', component: DrinksPage },
  { path: '/drinks', redirect: '/' },
  { path: '/menu', component: MenuPage },
  { path: '/fotos', component: FotosPage },
  { path: '/raumplan', component: RaumplanPage },
  { path: '/impressum', component: ImpressumPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
