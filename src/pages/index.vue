<template>
  <div>
    <h2 class="text-2xl font-semibold text-center mb-5">ورود</h2>
    <R-input v-model="user.mobile" type="text" label="شماره همراه" />
    <R-input
      v-model="user.password"
      label="رمز عبور"
      type="password"
      class="my-4"
      @keydown.enter.prevent="handleLogin"
    />
    <Errors :errors="errors" />
    <r-button
      class="my-4"
      label="ورود"
      block
      @click="handleLogin"
      :loading="loading"
    />
    <p class="text-center">
      حساب کاربری ندارید؟
      <router-link to="register" class="text-sm font-bold">
        ثبت نام کنید
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useCookie } from 'vue-cookie-next'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import apiManager from '@/api/apiServiceManager.service'

const router = useRouter()
const auth = useAuthStore()
const user = reactive({})
const toast = useToast()
const { setCookie } = useCookie()
const errors = ref(null)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    const { token } = await auth.loginUser(user)
    setCookie('token', token)
    setCookie('user', user)
    auth.setAuthUser(user)
    loading.value = false
    apiManager.defaults.headers.common['Authorization'] = `Bearer ${token}`
    toast.success('با موفقیت وارد شدید!', {
      timeout: 2000,
    })
    router.push('/dashboard')
  } catch (error) {
    errors.value = error.response.data.errors
    loading.value = false
    toast.error('خطایی رخ داده است', {
      timeout: 2000,
    })
  }
}
</script>
<route>
{
  meta: {
    layout: "auth"
  }
}
</route>
<style scoped></style>
