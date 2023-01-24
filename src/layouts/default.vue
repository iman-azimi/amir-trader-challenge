<template>
  <main>
    <div class="flex">
      <div class="invisible md:visible">
        <r-navigation-drawer />
      </div>
      <div class="w-full mt-12">
        <div class="md:m-4">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
