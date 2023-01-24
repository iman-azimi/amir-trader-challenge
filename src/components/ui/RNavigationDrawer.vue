<template>
  <nav class="h-screen z-50 w-0 md:w-72 bg-neutral-800">
    <div class="text-center pt-5">
      <span class="text-xl font-bold text-white">پنل مدیریت</span>
    </div>
    <ul>
      <li
        v-for="menu in menus"
        :key="menu.i"
        class="text-md text-white mt-7 cursor-pointer px-4"
      >
        <div class="flex justify-between px-2">
          <div v-if="!menu.items">
            <router-link :to="menu.url">
              <i :class="[menu.icon, 'text-xl align-middle']" />
              <span class="mr-5">{{ menu.title }}</span>
            </router-link>
          </div>
        </div>
        <Accordion
          v-if="menu.items"
          :accordion="menu.items"
          :title="menu.title"
          :icon="menu.icon"
        >
          <ul v-if="menu.items">
            <li
              v-for="item in menu.items"
              :key="item.i"
              class="text-base text-white px-12 mt-4 cursor-pointer"
            >
              <router-link :to="item.url">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </Accordion>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const menus = reactive([
  { title: 'داشبود', url: '/dashboard', icon: 'i-home-2' },
  {
    title: 'بازار های مالی',
    url: '/',
    icon: 'i-home-2',
    items: [{ title: 'قیمت ها', url: '/dashboard/device' }],
  },
  {
    title: 'تراکنش ها',
    url: '/dashboard',
    icon: 'i-note',
    items: [
      { title: 'برداشت ها', url: '/dashboard' },
      { title: 'واریز ها', url: '/dashboard' },
    ],
  },
  { title: 'تحلیل ها', url: '/dashboard/page', icon: 'i-home-2' },
  { title: 'سیگنال', url: '/dashboard/page', icon: 'i-home-2' },
])
</script>

<style scoped></style>
