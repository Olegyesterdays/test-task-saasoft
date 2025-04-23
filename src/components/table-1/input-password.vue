<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { defineModel } from 'vue';

const modelValue = defineModel<string | null>();
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <div style="display: flex; align-items: center; gap: 4px">
    <input
      :type="visible ? 'text' : 'password'"
      v-model="modelValue"
      style="border: 2px solid #000; width: 100%"
    />
    <button @click="toggle" style="border: 1px solid #000">
      {{ visible ? 'Скрыть' : 'Показать' }}
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
