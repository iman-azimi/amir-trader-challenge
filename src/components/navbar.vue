<template>
  <div>
    <nav class="bg-white h-12 fixed w-full left-0 top-0 z-40">
      <div class="flex z-40 justify-between align-middle px-4 mt-2">
        <div class="flex">
          <div class="md:w-0 cursor-pointer mt-0.5">
            <i class="i-menu text-xl" @click="toggleMenu"></i>
          </div>
          <div class="flex invisible md:visible w-0 md:mr-72">
            <div class="pt-0.5 cursor-pointer" @click="logoutModal">
              <i
                class="i-logout text-xl bg-gray-100 w-8 h-8 ml-2 p-1 text-center rounded-lg"
              ></i>
            </div>
            <div>
              <div class="text-xs font-bold">
                {{ auth.user.firstName }} {{ auth.user.lastName }}
              </div>
              <div class="text-sm">{{ auth.user.email }}</div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div
            class="border border-gray-200 ml-2 h-8 w-8 text-center rounded-md cursor-pointer hover:bg-gray-200"
          >
            <i class="i-notification-bing text-xl"></i>
          </div>
          <div class="h-8 bg-gray-50 rounded-md">
            <select class="px-4 h-8 border rounded-md">
              <option>ایرانی کارت</option>
              <option>ایرانی کارت</option>
              <option>ایرانی کارت</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
const auth = useAuthStore()
</script>

<style></style>
