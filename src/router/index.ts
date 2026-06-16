import AppLayout from '@/layouts/app-layout.vue'
import AuthLayout from '@/layouts/auth-layout.vue'
import FavoritesPage from '@/pages/favorites-page.vue'
import GamePage from '@/pages/game-page.vue'
import HomePage from '@/pages/home-page.vue'
import LoginPage from '@/pages/login-page.vue'
import NotificationsPage from '@/pages/notifications-page.vue'
import RegisterPage from '@/pages/register-page.vue'
import SearchPage from '@/pages/search-page.vue'
import TrendingPage from '@/pages/trending-page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: HomePage,
        },

        {
          path: '/search',
          component: SearchPage,
        },

        {
          path: '/notifications',
          component: NotificationsPage,
        },

        {
          path: '/trending',
          component: TrendingPage,
        },

        {
          path: '/favorites',
          component: FavoritesPage,
        },

        {
          path: '/game/:id',
          component: GamePage,
        },
      ],
    },

    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          component: LoginPage,
        },

        {
          path: 'register',
          component: RegisterPage,
        },
      ],
    },
  ],
})

export default router
