<template>
  <button
    type="submit"
    class="rounded-lg py-1 px-4 h-12"
    :class="getClasses"
    @click="click"
    :disabled="props.loading"
  >
    <span v-if="!props.loading">{{ props.label }}</span>
    <span v-else>لطفا منتظر بمانید</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: 'btn',
  },
  color: {
    type: String,
    default: 'blue',
  },
  size: {
    type: String,
    default: 'lg',
  },
  block: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['click'])

const getClasses = computed(() => {
  return {
    'w-full': props.block,
    'text-lg': props.size == 'lg',
    'bg-blue-500 text-white': props.color == 'blue',
    'bg-white': props.color == 'white',
    'border border-blue-500 text-blue-500': props.outlined,
    'bg-gray-500': props.loading,
  }
})
const click = () => {
  emit('click')
}
</script>

<style scoped></style>
