<template>
  <main id="auth">
    <div class="text-center">
      <span class="text-2xl font-bold">امیر تریدر</span>
    </div>
    <div class="bg-white rounded-md px-14 py-6 mt-7">
      <transition name="fade" appear>
        <RouterView />
      </transition>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import cookies from 'vue-cookies'

const auth = inject('auth')

const router = useRouter()

onMounted(() => {
  const token = cookies.get('token')
  const user = cookies.get('user')
  if (token && user) {
    auth.setAuthUser(user)
    router.push('/dashboard')
  }
})
</script>

<style scoped>
#auth {
  max-width: 580px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
