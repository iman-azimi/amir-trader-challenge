<template>
  <div class="text-center">
    <p class="text-xl">خوش آمدید {{ getUser }} !</p>
    <r-button class="my-4" label="خروج" @click="handleLogout" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useCookie } from 'vue-cookie-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const cookie = useCookie()

const getUser = computed(() => {
  return auth.user.mobile
})

const handleLogout = async () => {
  try {
    await auth.logoutUser()
    cookie.removeCookie('token')
    cookie.removeCookie('user')
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
