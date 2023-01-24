import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { VueCookieNext } from 'vue-cookie-next'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { useAuthStore } from '@/stores/authStore'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

import './assets/main.css'
import './index.css'

const app = createApp(App)
app.component('DatePicker', Vue3PersianDatetimePicker)

app.use(VueCookieNext)
const options = {
  rtl: true,
  position: POSITION.TOP_CENTER,
}

app.use(Toast, options)
app.use(createPinia())

const routes = setupLayouts(generatedRoutes)
const authStore = useAuthStore()
app.provide('auth', authStore)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
router.beforeEach(async (to) => {
  if (to.meta.requireAuth) {
    !authStore.loggedIn && router.push('/')
  }
})
app.use(router)

app.mount('#app')
