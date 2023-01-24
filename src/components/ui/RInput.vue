<template>
  <div class="my-4">
    <label class="text-base">{{ props.label }}</label>
    <div
      class="border border-gray-300 flex align-middle h-12 rounded-md p-2 bg-white"
    >
      <input
        v-model="model"
        :type="props.type"
        class="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0 rounded-md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue
  },

  set(value) {
    return emit('update:modelValue', value)
  },
})
</script>

<style scoped></style>
