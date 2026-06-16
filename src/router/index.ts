import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/app-layout.vue'
import AuthLayout from '@/layouts/auth-layout.vue'
import PageGameDescription from '@/pages/game/page-game-description.vue'
import PageHome from '@/pages/navigation/page-home.vue'
import PageNotifications from '@/pages/general/page-notifications.vue'
import PageLogin from '@/pages/auth/page-login.vue'
import PageRegister from '@/pages/auth/page-register.vue'
import PageSearch from '@/pages/navigation/page-search.vue'
import PageTrending from '@/pages/navigation/page-trending.vue'
import PageFavorites from '@/pages/navigation/page-favorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: PageHome,
        },

        {
          path: '/search',
          component: PageSearch,
        },

        {
          path: '/notifications',
          component: PageNotifications,
        },

        {
          path: '/trending',
          component: PageTrending,
        },

        {
          path: '/favorites',
          component: PageFavorites,
        },

        {
          path: '/game/:id',
          component: PageGameDescription,
        },
      ],
    },

    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          component: PageLogin,
        },

        {
          path: 'register',
          component: PageRegister,
        },
      ],
    },
  ],
})

export default router
