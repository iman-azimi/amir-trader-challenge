<template>
  <div>
    <template v-if="!showVerify">
      <h2 class="text-2xl font-semibold text-center mb-5">ثبت نام</h2>
      <R-input v-model="user.username" type="text" label="نام کاربری" />
      <R-input v-model="user.mobile" type="text" label="شماره همراه" />
      <R-input v-model="user.password" label="رمز عبور" type="password" />
      <Errors :errors="errors" />
      <r-button
        class="my-4"
        label="ثبت نام"
        block
        @click="handleRegister"
        :loading="loading"
      />
      <p class="text-center">
        حساب کاربری دارید؟
        <router-link to="/" class="text-sm font-bold">وارد شوید</router-link>
      </p>
    </template>
    <template v-else>
      <div>
        <h4 class="text-lg font-semibold text-center mb-5">
          کد تایید خود را وارد نمایید
        </h4>
        <otp
          :digitCount="6"
          @update:otp="code = $event"
          class="text-center mt-10"
        />
        <r-button
          class="mt-10"
          label="ارسال"
          block
          @click="handleVerify"
          :loading="loading"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const user = reactive({})
const auth = useAuthStore()
const router = useRouter()
const toast = useToast()
const errors = ref(null)
const loading = ref(false)
const showVerify = ref(false)
const code = ref()
const handleRegister = async () => {
  loading.value = true
  try {
    await auth.registerUser(user)
    showVerify.value = true
    loading.value = false
    toast.success('کد تایید ارسال شد', {
      timeout: 2000,
    })
  } catch (error) {
    errors.value = error.response.data.errors
    loading.value = false
    toast.error('خطایی رخ داده است', {
      timeout: 2000,
    })
  }
}
const handleVerify = async () => {
  loading.value = true
  try {
    const params = {
      code: code.value,
      mobile: user.mobile,
    }
    await auth.verifyUser(params)
    showVerify.value = true
    toast.success('کد تایید ارسال شد', {
      timeout: 2000,
    })
    loading.value = false
    router.push('/')
  } catch (error) {
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
