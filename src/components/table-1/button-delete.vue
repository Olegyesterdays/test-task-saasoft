<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'remove'): void;
}>();
</script>

<template>
  <button @click="emit('remove')" style="border: 2px solid red; color: red">Удалить</button>
</template>

<style scoped lang="scss"></style>
